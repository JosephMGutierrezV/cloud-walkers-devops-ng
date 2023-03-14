import { ETypeCode, ETypeItemCode } from './enums';

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

export interface IButtonParams {
  label?: string;
  hidden?: boolean;
  hiddenLabel?: boolean;
  type?: string;
}

export interface IMessage {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
  icon?: string;
  contentStyleClass?: string;
  styleClass?: string;
}

export interface IGalleryImageParams {
  src: string;
  icon?: string;
  img?: string;
  alt?: string;
  infoMain: string;
  infoSub: string;
}

export interface ICodeBoxParams {
  code?: ICodeObject;
  contentAfterBefore: string;
  contentEditable: boolean;
  iconCopy: string;
  textCopy: string;
}

export interface ICodeObject {
  type: ETypeCode;
  content: ICodeItem[];
}

export interface ICodeItem {
  type: ETypeItemCode;
  data: string;
}

export interface IParamsAudioPlayer {
  src: string;
  textNotSupported: string;
}
