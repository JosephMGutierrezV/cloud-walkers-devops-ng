import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[CTemplate]',
})
export class CloudTemplateDirective {
  @Input() type!: string;

  @Input('cTemplate') name!: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }
}
