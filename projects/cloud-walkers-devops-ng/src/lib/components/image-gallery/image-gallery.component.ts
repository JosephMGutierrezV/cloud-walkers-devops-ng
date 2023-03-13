import { Component, Input, OnInit } from '@angular/core';
import { IGalleryImageParams } from '../../entities/interfaces';

@Component({
  selector: 'c-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class CImageGalleryComponent implements OnInit {
  public activeIndex: number = 0;

  @Input() params!: IGalleryImageParams[];

  constructor() {}

  ngOnInit() {}

  setActive(index: number) {
    this.activeIndex = index;
  }

  setStyleImg(img: string) {
    return {
      '--optionBackground': `url(${img})`,
    };
  }
}
