import { Product } from './../../models/product';
import { Injectable, ErrorHandler } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000';

  public first: string = '';
  public prev: string = '';
  public next: string = '';
  public last: string = '';

  constructor(private httpClient: HttpClient) {}

  // By default, HttpClient does only provide the response body, but in our case we need
  // to parse the Link header for pagination links so we need to tell HttpClient that we want the
  // full HttpResponse using the observe option.
  public sendGetRequest() {
    // Add safe, URL encoded_page parameter
    const options = {
      params: new HttpParams({ fromString: '_page=1&_limit=20' }),
    };

    //return this.httpClient.get(this.REST_API_SERVER, options).pipe(retry(3),catchError(this.handleError));

    return this.httpClient
      .get<Product[]>(this.REST_API_SERVER, {
        params: new HttpParams({ fromString: '_page=1&_limit=20' }),
        observe: 'response',
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
        })
      );
  }

  public sendGetRequestToUrl(url: string) {
    return this.httpClient
      .get<Product[]>(url, { observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error';
    if (error.error instanceof ErrorEvent) {
      //client side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server side errors
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }

    return throwError(errorMessage);
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach((p) => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

    this.first = links['first'];
    this.last = links['last'];
    this.prev = links['prev'];
    this.next = links['next'];
  }
}
