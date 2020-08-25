import { Component, OnInit } from '@angular/core';
import {AbstractContainerComponent} from '@shared/components/abstract-container/abstract-container.component';
import {HttpCancelService} from '@core/service/http-cancel-service/http-cancel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponentextends extends AbstractContainerComponent implements OnInit {

  constructor(protected readonly httpCancelService: HttpCancelService) {
    super(httpCancelService);
  }

  ngOnInit(): void {}
}
