import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButtonParams } from '../../entities/interfaces';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class CButtonComponent {
  @Input() params!: IButtonParams;
  @Input() disabled = false;
  @Input() invalid = false;

  @Output() onClick = new EventEmitter();

  public isClicked = false;

  constructor() {}

  eventHandlerClick() {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 200);
    this.onClick.emit();
  }
}
