import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map, Observable, Subscription } from 'rxjs';
import { IInputTextParams } from '../../entities/interfaces';

@Component({
  selector: 'c-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class CInputTextComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('cInputText') cInputText!: ElementRef;
  @Input() isValid = true;
  @Input() params!: IInputTextParams;
  private inputText$!: Observable<any>;
  private subscriptions: Subscription[] = [];
  public value = '';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.inputText$ = fromEvent(this.cInputText.nativeElement, 'keyup');
    this.subscriptions.push(
      this.inputText$
        .pipe(
          debounceTime(500),
          map((event: any) => event.target.value)
        )
        .subscribe((value: string) => {
          this.value = value;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
