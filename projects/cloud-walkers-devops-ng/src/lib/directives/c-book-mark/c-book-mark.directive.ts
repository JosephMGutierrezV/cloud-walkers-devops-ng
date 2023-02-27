import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[cBookMark]',
})
export class CBookMarkDirective implements OnInit, OnChanges {
  @Input('cBookMark') cBookMark: string = ''; // texto para el contenido de la cinta
  @Input('cBookMarkPosition') cBookMarkPosition: string = 'bottom'; // posición de la cinta

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const ribbon = this.createRibbon(this.cBookMark);
    this.renderer.insertBefore(
      this.elRef.nativeElement.parentNode,
      ribbon,
      this.elRef.nativeElement
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cBookMark']) {
      // Eliminar la cinta anterior
      const oldRibbon = this.elRef.nativeElement.parentNode.querySelector(
        `.${this.setStylePosition()}`
      );

      if (oldRibbon) {
        this.renderer.removeChild(
          this.elRef.nativeElement.parentNode,
          oldRibbon
        );
      }

      const ribbon = this.createRibbon(this.cBookMark);
      this.renderer.insertBefore(
        this.elRef.nativeElement.parentNode,
        ribbon,
        this.elRef.nativeElement
      );
    }
  }

  private createRibbon(content: string): HTMLElement {
    const ribbon = this.renderer.createElement('div');
    this.renderer.addClass(ribbon, this.setStylePosition());

    const ribbonContent = this.renderer.createElement('span');
    this.renderer.addClass(ribbonContent, 'ribbon-content');
    this.renderer.setProperty(ribbonContent, 'innerHTML', content);

    this.renderer.appendChild(ribbon, ribbonContent);

    return ribbon;
  }

  private setStylePosition(): string {
    switch (this.cBookMarkPosition) {
      case 'top': {
        return 'ribbon-top';
      }
      case 'bottom': {
        return 'ribbon-bottom';
      }
      default: {
        return 'ribbon-bottom';
      }
    }
  }
}
