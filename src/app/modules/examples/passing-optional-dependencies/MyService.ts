import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  //We transform the elementId parameter to an injection token as follows:
  constructor (@Inject('elementId') private elementId: string) { }
}