import { Component, VERSION } from '@angular/core';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;

  name = 'Angular ' + VERSION.major;

  public title: string = '*cms-angular10 --Angular 10 Markdown Pipe*';
  public content: string = '**Markdown** is cool!';

  makePromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 3000);
    });
  }

  makeObservable(value: string): Observable<string> {
    return of(value).pipe(delay(3000));
  }
}
