import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JspdfComponent } from './jspdf/jspdf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ExportTableDataToAnyFormatComponent } from './export-table-data-to-any-format/export-table-data-to-any-format.component';

@NgModule({
  declarations: [JspdfComponent, ExportTableDataToAnyFormatComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTableExporterModule,
    ExamplesRoutingModule,
  ],
  exports: [JspdfComponent],
})
export class ExamplesModule {}
