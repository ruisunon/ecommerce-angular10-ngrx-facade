import { Observable, Subscription } from 'rxjs';
import { ProcessingStep } from '../../models/processing-steps/processing-step';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.scss'],
  encapsulation: ViewEncapsulation.None, // please note this
})
export class StepContainerComponent implements OnInit, OnDestroy {
  currentPStep: ProcessingStep;
  orderResponseStatus$: Observable<ResultState> = this.startOrderFacade.getResponseStatus();
  private currentPStepSub$: Subscription;
  private initialSub$: Subscription;

  constructor(private router: Router,
    private facade: ProcessingStepFacade,
    private navigationService: NavigationService,
    private initialFacade: InitialFacade,
    private startOrderFacade: StartOrderFacade) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
