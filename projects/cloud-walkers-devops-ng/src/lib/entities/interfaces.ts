import { ETypeCode, ETypeItemCode, EViewModeGantt } from './enums';

export interface IInputTextParams {
  label?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
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

export interface IParamsTable {
  caption: string;
  columns: IColumn[];
  rows: any[];
}

export interface IColumn {
  header: string;
  field: string;
  type: string;
  sortable: boolean;
  filter: boolean;
  filterMatchMode: string;
  filterPlaceholder: string;
  filterType: string;
  filterMaxLength: number;
  filterMinLength: number;
  filterMax: number;
  filterMin: number;
  filterStep: number;
}

export interface IParamsList {
  items?: IListItem[];
  iconList: string;
}

export interface IListItem {
  label?: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  hidden?: boolean;
}

export interface IParamsQuoteList {
  quote?: string;
  author?: string;
}

export interface IParamsGantt {
  header_height: number;
  column_width: number;
  step: number;
  view_modes: EViewModeGantt[];
  bar_height: number;
  bar_corner_radius: number;
  arrow_curve: number;
  padding: number;
  view_mode: EViewModeGantt;
  date_format: string;
  popup_trigger: string;
  custom_popup_html: string | null;
  language: string;
  tasks?: ITask[];
}

export interface ITask {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies: string;
}
