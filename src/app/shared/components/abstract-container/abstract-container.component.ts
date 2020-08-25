import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpCancelService} from '@core/service/http-cancel-service/http-cancel.service';

@Component({
  selector: 'app-abstract-container',
  template: ` ABSTRACT COMPONENT `,
  styleUrls: ['./abstract-container.component.scss'],
})
export class AbstractContainerComponent implements OnInit, OnDestroy {
  
  constructor(protected readonly httpCancelService: HttpCancelService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.httpCancelService.cancelPendingRequests();
  }
}
