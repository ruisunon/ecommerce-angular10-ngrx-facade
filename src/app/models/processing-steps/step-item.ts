export interface StepItem {
  label: string;
  selected: boolean;
  id: string;
  status?: StepStatus;
  stepOrder?: number;
}

export declare type StepStatus = 'complete' | 'incomplete';

export declare const steps: StepItem[];
