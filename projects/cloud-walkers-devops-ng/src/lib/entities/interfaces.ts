export interface IInputTextParams {
  label?: string;
  placeholder?: string;
  value?: string;
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
  hiddenValue?: boolean;
  helpText?: string;
  hideHelpText?: boolean;
}
