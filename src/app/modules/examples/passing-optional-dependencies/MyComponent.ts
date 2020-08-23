import { Component } from '@angular/core';
import {MyService} from './MyService';

@Component({
  selector: 'app-my',
  template: 
    `
      <div id="container"></div>
    `,
    //Next, we need to provide this token to the service through the component’s providers array:
    //Here we provided the token at the component level but we can also provide tokens at the module level if it makes sense.
   providers: [
    {provide: 'elementId', useValue: 'container'},
  ]
})
export class MyComponent {

  constructor(private myService: MyService) { }
}

// Passing Optional Dependencies
// When a component or service needs a dependency, the class constructor takes that dependency as 
// a parameter. You can tell Angular that the dependency is optional by annotating the constructor parameter with @Optional().

// import { Optional } from '@angular/core';

// constructor(@Optional() private httpClient?: HttpClient) {}
// 
// Passing Parameters to Services with the @Inject Decorator
// If you need to pass additional parameters to an Angular service, you can use the @Inject decorator 
// which allows you to pass your parameters to the service via Angular’s dependency injection.