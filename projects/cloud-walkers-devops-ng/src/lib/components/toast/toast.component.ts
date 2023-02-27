import {
  animateChild,
  AnimationEvent,
  query,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CloudTemplateDirective } from '../../directives/c-template/cloud-template.directive';
import { IMessage } from '../../entities/interfaces';
import { MessageService } from '../../services/message/message.service';
import { ObjectUtils } from '../../utils/object.utils';
import { UniqueComponentId } from '../../utils/unique-id.utils';
import { ZIndexUtils } from '../../utils/z-index.utils';

@Component({
  selector: 'c-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toastAnimation', [
      transition(':enter, :leave', [query('@*', animateChild())]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CToastComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() key!: string;

  @Input() autoZIndex: boolean = true;

  @Input() baseZIndex: number = 0;

  @Input() style: any;

  @Input() styleClass!: string;

  @Input() position: string = 'top-right';

  @Input() preventOpenDuplicates: boolean = false;

  @Input() preventDuplicates: boolean = false;

  @Input() showTransformOptions: string = 'translateY(100%)';

  @Input() hideTransformOptions: string = 'translateY(-100%)';

  @Input() showTransitionOptions: string = '300ms ease-out';

  @Input() hideTransitionOptions: string = '250ms ease-in';

  @Input() breakpoints: any;

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @ViewChild('container') containerViewChild!: ElementRef;

  @ContentChildren(CloudTemplateDirective) templates!: QueryList<any>;

  messageSubscription!: Subscription;

  clearSubscription!: Subscription;

  messages!: IMessage[] | null;

  messagesArchieve!: IMessage[];

  template!: TemplateRef<any>;

  constructor(
    public messageService: MessageService,
    private cd: ChangeDetectorRef,
    private zindexUtils: ZIndexUtils
  ) {}

  styleElement: any;

  id: string = UniqueComponentId();

  ngOnInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe(
      (messages) => {
        if (messages) {
          if (Array.isArray(messages)) {
            const filteredMessages = messages.filter((m) => this.canAdd(m));
            this.add(filteredMessages);
          } else if (this.canAdd(messages)) {
            this.add([messages]);
          }
        }
      }
    );

    this.clearSubscription = this.messageService.clearObserver.subscribe(
      (key) => {
        if (key) {
          if (this.key === key) {
            this.messages = null;
          }
        } else {
          this.messages = null;
        }

        this.cd.markForCheck();
      }
    );
  }

  ngAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }

  add(messages: IMessage[]): void {
    this.messages = this.messages
      ? [...this.messages, ...messages]
      : [...messages];

    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve
        ? [...this.messagesArchieve, ...messages]
        : [...messages];
    }

    this.cd.markForCheck();
  }

  canAdd(message: IMessage): boolean {
    let allow = this.key === message.key;

    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }

    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }

    return allow;
  }

  containsMessage(collection: IMessage[] | null, message: IMessage): boolean {
    if (!collection) {
      return false;
    }

    return (
      collection.find((m) => {
        return (
          m.summary === message.summary &&
          m.detail == message.detail &&
          m.severity === message.severity
        );
      }) != null
    );
  }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      this.template = item.template;
    });
  }

  onMessageClose(event: any) {
    this.messages?.splice(event.index, 1);

    this.onClose.emit({
      message: event.message,
    });

    this.cd.detectChanges();
  }

  onAnimationStart(event: AnimationEvent) {
    if (event.fromState === 'void') {
      this.containerViewChild.nativeElement.setAttribute(this.id, '');
      if (
        this.autoZIndex &&
        this.containerViewChild.nativeElement.style.zIndex === ''
      ) {
        this.zindexUtils.set(
          'modal',
          this.containerViewChild.nativeElement,
          this.baseZIndex
        );
      }
    }
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      if (this.autoZIndex && ObjectUtils.isEmpty(this.messages)) {
        this.zindexUtils.clear(this.containerViewChild.nativeElement);
      }
    }
  }

  createStyle() {
    if (!this.styleElement) {
      this.styleElement = document.createElement('style');
      this.styleElement.type = 'text/css';
      document.head.appendChild(this.styleElement);
      let innerHTML = '';
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = '';
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle +=
            styleProp +
            ':' +
            this.breakpoints[breakpoint][styleProp] +
            ' !important;';
        }
        innerHTML += `
                  @media screen and (max-width: ${breakpoint}) {
                      .p-toast[${this.id}] {
                         ${breakpointStyle}
                      }
                  }
              `;
      }

      this.styleElement.innerHTML = innerHTML;
    }
  }

  destroyStyle() {
    if (this.styleElement) {
      document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }

    if (this.containerViewChild && this.autoZIndex) {
      this.zindexUtils.clear(this.containerViewChild.nativeElement);
    }

    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }

    this.destroyStyle();
  }
}
