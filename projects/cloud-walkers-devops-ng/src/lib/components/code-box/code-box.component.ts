import { Component, Input, OnInit } from '@angular/core';
import { ETypeCode, ETypeItemCode } from '../../entities/enums';
import { ICodeBoxParams, ICodeItem } from '../../entities/interfaces';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'c-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CCodeBoxComponent implements OnInit {
  private numberOfTabs = 0;
  public textTooltip = '';
  public isCopied = false;

  @Input() params: ICodeBoxParams = {
    contentAfterBefore: 'assets/gifs/cloud-spin30.gif',
    contentEditable: false,
    iconCopy: 'pi pi-copy',
    textCopy: 'Copy',
  };

  constructor(private readonly clipboard: Clipboard) {
    this.textTooltip = this.params.textCopy;
  }

  ngOnInit() {}

  setContentBeforeAfter() {
    return { '--option-icon': `url(${this?.params?.contentAfterBefore})` };
  }

  copyToClipboard() {
    this.isCopied = true;
    const el: any = document.querySelector('code');
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection!.removeAllRanges();
    selection!.addRange(range);
    this.clipboard.copy(selection!.toString());
    selection!.removeAllRanges();
    setTimeout(() => {
      this.isCopied = false;
    }, 1600);
  }

  // TODO: Refactor this method and add more types functionality
  getContentWithTabs(item: ICodeItem, type: string) {
    switch (type) {
      case ETypeCode.HTML: {
        let response = '';
        if (item.type === ETypeItemCode.TAG_OPEN) {
          response = `${'\t'.repeat(this.numberOfTabs)}${item.data}`;
          this.numberOfTabs++;
        } else if (item.type === ETypeItemCode.TAG_CLOSE) {
          this.numberOfTabs--;
          response = `${'\t'.repeat(this.numberOfTabs)}${item.data}`;
        } else {
          response = `${'\t'.repeat(this.numberOfTabs)}${item.data}`;
        }
        return response;
      }
      case ETypeCode.CSS: {
        if (item.type === ETypeItemCode.ATTRIBUTE) {
          this.numberOfTabs++;
        }
        return `${'\t'.repeat(this.numberOfTabs)}${item.data}`;
      }
      case ETypeCode.JS: {
        if (item.type === ETypeItemCode.FUNCTION) {
          this.numberOfTabs++;
        }
        return `${'\t'.repeat(this.numberOfTabs)}${item.data}`;
      }
      default: {
        return item.data;
      }
    }
  }
}
