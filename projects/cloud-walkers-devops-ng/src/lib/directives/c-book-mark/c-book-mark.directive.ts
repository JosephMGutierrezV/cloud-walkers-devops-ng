import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cBookMark]',
})
export class CBookMarkDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.createRibbon();
    this.addText();
  }

  private createRibbon() {
    const ribbon = this.renderer.createElement('div');
    this.renderer.addClass(ribbon, 'ribbon-2');
    this.renderer.appendChild(this.el.nativeElement, ribbon);
  }

  private addText() {
    const ribbon = this.el.nativeElement.querySelector('.ribbon-2');
    const text = this.renderer.createElement('samp');
    const textNode = this.renderer.createText('Texto de la cinta');
    this.renderer.appendChild(text, textNode);
    this.renderer.appendChild(ribbon, text);
  }
}
