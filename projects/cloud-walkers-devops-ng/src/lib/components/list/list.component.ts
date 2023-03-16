import { Component, Input, OnInit } from '@angular/core';
import { IParamsList } from '../../entities/interfaces';

@Component({
  selector: 'c-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class CListComponent implements OnInit {
  @Input() params: IParamsList = {
    iconList: '',
  };

  constructor() {}

  ngOnInit() {}

  setIconList(icon: string) {
    return {
      '--option-list': `url(${icon})`,
    };
  }
}
