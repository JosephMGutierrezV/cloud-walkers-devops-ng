import { Component, Input, OnInit } from '@angular/core';
import { IParamsTable } from '../../entities/interfaces';

@Component({
  selector: 'c-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class CTableComponent implements OnInit {
  @Input() params: IParamsTable = {
    columns: [],
    caption: '',
    rows: [],
  };

  constructor() {}

  ngOnInit() {}
}
