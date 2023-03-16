import { Component, Input, OnInit } from '@angular/core';
import { IParamsQuoteList } from '../../entities/interfaces';

@Component({
  selector: 'c-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss'],
})
export class CQuoteListComponent implements OnInit {
  @Input() params!: IParamsQuoteList;
  constructor() {}

  ngOnInit() {}
}
