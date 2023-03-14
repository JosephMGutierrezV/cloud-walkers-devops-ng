import { Component } from '@angular/core';
import {
  ETypeCode,
  ETypeItemCode,
} from 'projects/cloud-walkers-devops-ng/src/lib/entities/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'demo-app';

  public inputGalleryParams = [
    {
      src: '--optionBackground:url(../assets/images/ic-bg-ellie.jpg)',
      icon: 'pi pi-search',
      infoMain: 'Ellie',
      infoSub: 'Ellie',
    },
    {
      src: '--optionBackground:url(../assets/images/ic-bg-joel-ellie.jpg)',
      icon: 'pi pi-search',
      infoMain: 'Joel & Ellie',
      infoSub: 'Joel & Ellie',
    },
    {
      src: '--optionBackground:url(../assets/images/ic-bg-joel.png)',
      icon: 'pi pi-search',
      infoMain: 'Joel',
      infoSub: 'Joel',
    },
    {
      src: '--optionBackground:url(../assets/images/ic-bg-monstro-1.jpg)',
      icon: 'pi pi-search',
      infoMain: 'Monstro',
      infoSub: 'Monstro',
    },
    {
      src: '--optionBackground:url(../assets/images/ic-bg-monstro-2.webp)',
      icon: 'pi pi-search',
      infoMain: 'Monstro',
      infoSub: 'Monstro',
    },
  ];

  public codeBoxParams = {
    contentEditable: true,
    iconCopy: 'pi pi-copy',
    contentAfterBefore: 'This is content before the code box',
    textCopy: 'Copy',
    code: {
      type: ETypeCode.HTML,
      content: [
        {
          type: ETypeItemCode.TAG_OPEN,
          data: '<div>',
        },
        {
          type: ETypeItemCode.TAG_OPEN,
          data: '<h1>',
        },
        {
          type: ETypeItemCode.CONTENT,
          data: 'This is a heading',
        },
        {
          type: ETypeItemCode.COMMENT,
          data: '<!-- aca este es un comentario -->',
        },
        {
          type: ETypeItemCode.TAG_OPEN,
          data: '<p>',
        },
        {
          type: ETypeItemCode.CONTENT,
          data: 'This is a paragraph',
        },
        {
          type: ETypeItemCode.TAG_CLOSE,
          data: '</p>',
        },
        {
          type: ETypeItemCode.TAG_CLOSE,
          data: '</h1>',
        },
        {
          type: ETypeItemCode.TAG_CLOSE,
          data: '</div>',
        },
      ],
    },
  };
}
