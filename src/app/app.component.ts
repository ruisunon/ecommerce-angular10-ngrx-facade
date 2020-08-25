import { HttpCancelService } from './core/service/http-cancel-service/http-cancel.service';
import { Component, VERSION, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';
import {Router, ActivationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;

  name = 'Angular ' + VERSION.major;

  public title: string = '*cms-angular10 --Angular 10 Markdown Pipe*';
  public content: string = '**Markdown** is cool!';

  constructor( private httpCancelService: HttpCancelService, private router: Router) {}
   ngOnInit(): void {
     this.router.events.subscribe((event) => {
       if (event instanceof ActivationEnd) {
         this.httpCancelService.cancelPendingRequests();
       }
     });
   }
   
  makePromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 3000);
    });
  }

  makeObservable(value: string): Observable<string> {
    return of(value).pipe(delay(3000));
  }
}
