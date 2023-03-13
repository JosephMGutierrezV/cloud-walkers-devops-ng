import { Component, OnInit } from '@angular/core';
import { ICodeBoxParams } from '../../entities/interfaces';

@Component({
  selector: 'c-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CCodeBoxComponent implements OnInit {
  public params!: ICodeBoxParams;
  constructor() {}

  ngOnInit() {}

  setContentBeforeAfter() {
    return { '--option-icon': `url(${this.params.contentAfterBefore})` };
  }
}
