import { MatTableExporterModule } from 'mat-table-exporter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-table-data-to-any-format',
  templateUrl: './export-table-data-to-any-format.component.html',
  styleUrls: ['./export-table-data-to-any-format.component.scss'],
})
export class ExportTableDataToAnyFormatComponent extends MatTableExporterModule {
  title = 'export-table-data-to-any-format';
  dataSource: DataOfFootballers[] = [
    {
      playerName: 'Cristiano Ronaldo',
      playerCountry: 'Pourtgal',
      playerClub: 'Juventus',
    },
    {
      playerName: 'Lionel Messi',
      playerCountry: 'Argentina',
      playerClub: 'Barcelona',
    },
    {
      playerName: 'Neymar Junior',
      playerCountry: 'Brazil',
      playerClub: 'PSG',
    },
    {
      playerName: 'Tonni Kroos',
      playerCountry: 'Germany',
      playerClub: 'Real Madrid',
    },
    {
      playerName: 'Paul Pogba',
      playerCountry: 'France',
      playerClub: 'Manchester United',
    },
  ];
  displayedColumns: string[] = ['playerName', 'playerCountry', 'playerClub'];
}