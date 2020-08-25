import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HttpCancelService {

  private cancelPendingRequests$ = new Subject<void>()

  constructor() { }

  /** Cancels all pending Http requests. */
  public cancelPendingRequests() {
    this.cancelPendingRequests$.next()
  }

  public onCancelPendingRequests() {
    return this.cancelPendingRequests$.asObservable()
  }
}

// Actually, the HttpCancelService stack is perfect, 
// but the probleme is where it's called. Calling this on navigation end may cause problems if you have child routes.

// So made an abstract container component which call the HttpCancelService when it's destroyed.
// That way I can manage when I want to cut any Http Cancelling request with more fine grain.