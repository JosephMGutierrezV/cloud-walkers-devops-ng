import {
  state,
  style,
  transition,
  trigger,
  animate,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IMessage } from '../../../entities/interfaces';

@Component({
  selector: 'c-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss'],
  animations: [
    trigger('messageState', [
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('void => *', [
        style({ transform: '{{showTransformParams}}', opacity: 0 }),
        animate('{{showTransitionParams}}'),
      ]),
      transition('* => void', [
        animate(
          '{{hideTransitionParams}}',
          style({
            height: 0,
            opacity: 0,
            transform: '{{hideTransformParams}}',
          })
        ),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CToastItemComponent implements AfterViewInit, OnDestroy {
  @Input() message!: IMessage;

  @Input() index!: number;

  @Input() template!: TemplateRef<any>;

  @Input() showTransformOptions!: string;

  @Input() hideTransformOptions!: string;

  @Input() showTransitionOptions!: string;

  @Input() hideTransitionOptions!: string;

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @ViewChild('container') containerViewChild!: ElementRef;

  timeout: any;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.initTimeout();
  }

  initTimeout() {
    if (!this.message.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message,
          });
        }, this.message.life || 3000);
      });
    }
  }

  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  onMouseEnter() {
    this.clearTimeout();
  }

  onMouseLeave() {
    this.initTimeout();
  }

  onCloseIconClick(event: any) {
    this.clearTimeout();

    this.onClose.emit({
      index: this.index,
      message: this.message,
    });

    event.preventDefault();
  }

  ngOnDestroy() {
    this.clearTimeout();
  }
}
