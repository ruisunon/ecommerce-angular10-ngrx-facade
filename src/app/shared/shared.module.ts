import { RequiredSignDirectiveModule } from './../core/directive/required-sign-directive.module';

import { AlertComponent } from './components/alert/alert.component';
import { AbstractContainerComponent } from './components/abstract-container/abstract-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe} from '@angular/common';

@NgModule({
  declarations: [AbstractContainerComponent, AlertComponent],
  imports: [CommonModule, TranslateModule, RequiredSignDirectiveModule],
  providers: [TitleCasePipe],
  exports: [AbstractContainerComponent, AlertComponent],
})
export class SharedModule {}