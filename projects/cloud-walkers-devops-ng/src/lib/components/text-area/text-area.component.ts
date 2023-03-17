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
import { Subscription } from 'rxjs';
import { ITextAreaParams } from '../../entities/interfaces';

@Component({
  selector: 'c-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CTextAreaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CTextAreaComponent),
      multi: true,
    },
  ],
})
export class CTextAreaComponent
  implements ControlValueAccessor, OnDestroy, AfterViewInit, Validator
{
  @Input() params: ITextAreaParams = {
    name: 'c-text-area',
    label: '',
    cols: 30,
    rows: 10,
  };

  @Input() disabled: boolean = false;
  @ViewChild('cTextArea') cTextArea!: ElementRef;

  public isValid = true;
  private subscriptions: Subscription[] = [];
  private _value = '';
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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

  ngAfterViewInit() {}
}
