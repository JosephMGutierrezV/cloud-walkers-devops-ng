import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cBookMark]',
})
export class CBookMarkDirective {
  @Input() cBookMark: string = ''; // texto para el contenido de la cinta

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const ribbon = this.createRibbon(this.cBookMark);
    this.renderer.insertBefore(
      this.elRef.nativeElement.parentNode,
      ribbon,
      this.elRef.nativeElement
    );
  }

  private createRibbon(content: string): HTMLElement {
    const ribbon = this.renderer.createElement('div');
    this.renderer.addClass(ribbon, 'ribbon');

    const ribbonContent = this.renderer.createElement('span');
    this.renderer.addClass(ribbonContent, 'ribbon-content');
    this.renderer.setProperty(ribbonContent, 'innerHTML', content);

    this.renderer.appendChild(ribbon, ribbonContent);

    return ribbon;
  }
}
