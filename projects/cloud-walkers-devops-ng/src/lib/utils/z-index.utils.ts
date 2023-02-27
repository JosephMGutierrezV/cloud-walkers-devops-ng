import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZIndexUtils {
  constructor() {}

  private zIndexes: any[] = [];

  public generateZIndex(key: any, baseZIndex: any) {
    let lastZIndex =
      this.zIndexes.length > 0
        ? this.zIndexes[this.zIndexes.length - 1]
        : { key, value: baseZIndex };
    let newZIndex =
      lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

    this.zIndexes.push({ key, value: newZIndex });

    return newZIndex;
  }

  public revertZIndex(zIndex: number) {
    this.zIndexes = this.zIndexes.filter((obj) => obj.value !== zIndex);
  }

  public getCurrentZIndex() {
    return this.zIndexes.length > 0
      ? this.zIndexes[this.zIndexes.length - 1].value
      : 0;
  }

  public getZIndex(el: { style: { zIndex: string } }) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  }

  public clear(el: { style: { zIndex: string } }) {
    if (el) {
      this.revertZIndex(this.getZIndex(el));
      el.style.zIndex = '';
    }
  }

  public set(key: any, el: { style: { zIndex: string } }, baseZIndex: any) {
    if (el) {
      el.style.zIndex = String(this.generateZIndex(key, baseZIndex));
    }
  }
}
