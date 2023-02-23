import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cTooltip]',
})
export class CToolTipDirective {
  @Input('cTooltip') text: string = '';
  @Input('cToolTipPosition') position: 'top' | 'bottom' | 'left' | 'right' =
    'top';

  private tooltipElement: HTMLElement | null = null;

  constructor(private readonly el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.showTooltip();
  }

  @HostListener('mouseout') onMouseOut() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.innerText = this.text;
    this.setPosition();
    document.body.appendChild(this.tooltipElement);
    // Obtiene la posición del elemento de host
    const hostPosition = this.el.nativeElement.getBoundingClientRect();

    // Obtiene la posición y el tamaño del tooltip
    const tooltipPosition = this.tooltipElement.getBoundingClientRect();

    // Calcula la posición y el tamaño del viewport
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Calcula la posición x del tooltip
    let tooltipLeft =
      hostPosition.left + (hostPosition.width - tooltipPosition.width) / 2;

    // Si el tooltip se sale del viewport a la derecha, mueve el tooltip a la izquierda del elemento de host
    if (tooltipLeft + tooltipPosition.width > viewportWidth) {
      tooltipLeft = hostPosition.left - tooltipPosition.width;
    }

    // Si el tooltip se sale del viewport a la izquierda, mueve el tooltip a la derecha del elemento de host
    if (tooltipLeft < 0) {
      tooltipLeft = hostPosition.right;
    }

    // Calcula la posición y del tooltip
    let tooltipTop = hostPosition.top - tooltipPosition.height - 10;

    // Si el tooltip se sale del viewport arriba, mueve el tooltip abajo del elemento de host
    if (tooltipTop < 0) {
      tooltipTop = hostPosition.bottom + 10;
    }

    // Si el tooltip se sale del viewport abajo, mueve el tooltip arriba del elemento de host
    if (tooltipTop + tooltipPosition.height > viewportHeight) {
      tooltipTop = hostPosition.top - tooltipPosition.height - 10;
    }

    // Establece la posición del tooltip
    this.tooltipElement.style.position = 'absolute';
    this.tooltipElement.style.left = `${tooltipLeft}px`;
    this.tooltipElement.style.top = `${tooltipTop}px`;
  }

  private setPosition() {
    switch (this.position) {
      case 'top': {
        this.tooltipElement!.classList.add('c-tooltip-top');
        break;
      }
      case 'bottom': {
        this.tooltipElement!.classList.add('c-tooltip-bottom');
        break;
      }

      case 'left': {
        this.tooltipElement!.classList.add('c-tooltip-left');
        break;
      }

      case 'right': {
        this.tooltipElement!.classList.add('c-tooltip-right');
        break;
      }

      default: {
        this.tooltipElement!.classList.add('c-tooltip-top');
        break;
      }
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.tooltipElement.remove();
    }
  }
}
