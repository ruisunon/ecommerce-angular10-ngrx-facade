import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTableDataToAnyFormatComponent } from './export-table-data-to-any-format.component';

describe('ExportTableDataToAnyFormatComponent', () => {
  let component: ExportTableDataToAnyFormatComponent;
  let fixture: ComponentFixture<ExportTableDataToAnyFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportTableDataToAnyFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportTableDataToAnyFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
