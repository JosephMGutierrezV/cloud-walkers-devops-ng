import { Component } from '@angular/core';

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
}
