import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[CScrollAnimation]',
})
export class CScrollAnimationDirective {
  @Input() alwaysAnimate: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'opacity 600ms ease-in-out, transform 600ms ease-in-out'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(50px)'
    );
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkVisibility();
  }

  private checkVisibility(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top >= 0 && rect.top <= windowHeight * 0.8) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'translateY(0)'
      );
    } else if (this.alwaysAnimate) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'translateY(50px)'
      );
    }
  }
}
