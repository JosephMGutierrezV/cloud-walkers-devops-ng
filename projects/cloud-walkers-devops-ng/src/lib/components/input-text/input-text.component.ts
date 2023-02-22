import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { debounceTime, fromEvent, map, Observable, Subscription } from 'rxjs';
import { IInputTextParams } from '../../entities/interfaces';

@Component({
  selector: 'c-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CInputTextComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CInputTextComponent),
      multi: true,
    },
  ],
})
export class CInputTextComponent
  implements ControlValueAccessor, OnDestroy, AfterViewInit, Validator
{
  @ViewChild('cInputText') cInputText!: ElementRef;
  @Input() params: IInputTextParams = {
    disabled: false,
  }
  @Input() set disabled(value: boolean) {
    this._disabled = value;
  }
  public isValid = true;
  private inputText$!: Observable<any>;
  private subscriptions: Subscription[] = [];
  private _value = '';
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private _disabled: boolean = false;

  get value() {
    return this._value;
  }

  set value(value: string) {
    if (this._value !== value) {
      this._value = value;
      this.onChange(value);
      this.onTouched();
    }
  }

  get disabled() {
    return this._disabled;
  }

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const isValid = control.valid;
    const validatorFn = control.validator;
    const validate = validatorFn
      ? validatorFn(new FormControl(control.value))
      : null;
    if (isValid && validate) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
    return null;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewInit() {
    this.subscriberInputText$();
  }

  private subscriberInputText$() {
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
