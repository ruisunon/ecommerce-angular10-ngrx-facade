import { Product } from './../../models/product';
import { DataService } from './../../service/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .sendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public firstPage() {
    this.products = [];
    this.dataService
      .sendGetRequestToUrl(this.dataService.first)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
      });
  }
  public previousPage() {
    if (this.dataService.prev !== undefined && this.dataService.prev !== '') {
      this.products = [];
      this.dataService
        .sendGetRequestToUrl(this.dataService.prev)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res: HttpResponse<Product[]>) => {
          console.log(res);
          this.products = res.body;
        });
    }
  }
  public nextPage() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.products = [];
      this.dataService
        .sendGetRequestToUrl(this.dataService.next)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res: HttpResponse<Product[]>) => {
          console.log(res);
          this.products = res.body;
        });
    }
  }
  public lastPage() {
    this.products = [];
    this.dataService
      .sendGetRequestToUrl(this.dataService.last)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
      });
  }
}