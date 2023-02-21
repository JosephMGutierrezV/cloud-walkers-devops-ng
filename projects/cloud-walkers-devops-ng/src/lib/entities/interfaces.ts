export interface IInputTextParams {
  label?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  disabled: boolean;
  readonly?: boolean;
  hidden?: boolean;
  hiddenLabel?: boolean;
  hiddenPlaceholder?: boolean;
  hiddenValue?: boolean;
  helpText?: string;
  hideHelpText?: boolean;
}

export interface ITextAreaParams {
  label?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  disabled: boolean;
  readonly?: boolean;
  hidden?: boolean;
  hiddenLabel?: boolean;
  hiddenPlaceholder?: boolean;
  name: string;
  cols?: number;
  rows?: number;
}
