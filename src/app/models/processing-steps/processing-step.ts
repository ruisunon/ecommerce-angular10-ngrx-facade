import { StepStatus } from './step-item';

export interface ProcessingStep {
  id: string;
  steps: string[] | undefined;
  stepOrder: number;
  status: StepStatus;
}
export declare const pSteps: ProcessingStep[];
