import { HttpCancelService } from './../../shared/services/http-cancel-service/http-cancel.service';

import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpCancelInterceptor implements HttpInterceptor {
  constructor(private httpCancelService: HttpCancelService) { }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    return next.handle(req).pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()))
  }
}