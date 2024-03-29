import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CloudWalkersDevopsNgComponent } from './cloud-walkers-devops-ng.component';
import { CButtonComponent } from './components/button/button.component';
import { CInputTextComponent } from './components/input-text/input-text.component';
import { CTextAreaComponent } from './components/text-area/text-area.component';
import { CToolTipDirective } from './directives/c-tool-tip/c-tool-tip.directive';
import { CBookMarkDirective } from './directives/c-book-mark/c-book-mark.directive';
import { CloudWalkersDevopsNgModuleConfig } from './entities/lib-configuration';
import { CToastComponent } from './components/toast/toast.component';
import { CToastItemComponent } from './components/toast/toast-item/toast-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CYoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { CImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { CCodeBoxComponent } from './components/code-box/code-box.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { CAudioPlayerComponent } from './components/audio-player/audio-player.component';
import { CTableComponent } from './components/table/table.component';
import { CListComponent } from './components/list/list.component';
import { CQuoteListComponent } from './components/quote-list/quote-list.component';
import { CScrollAnimationDirective } from './directives/c-scroll-animation/cloud-scroll-animation.directive';

@NgModule({
  declarations: [
    CloudWalkersDevopsNgComponent,
    CInputTextComponent,
    CTextAreaComponent,
    CButtonComponent,
    CToolTipDirective,
    CBookMarkDirective,
    CToastItemComponent,
    CToastComponent,
    CYoutubePlayerComponent,
    CImageGalleryComponent,
    CCodeBoxComponent,
    CAudioPlayerComponent,
    CTableComponent,
    CListComponent,
    CQuoteListComponent,
    CScrollAnimationDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [CloudWalkersDevopsNgModuleConfig, Clipboard],
  exports: [
    CloudWalkersDevopsNgComponent,
    CInputTextComponent,
    CTextAreaComponent,
    CButtonComponent,
    CToolTipDirective,
    CBookMarkDirective,
    CToastItemComponent,
    CToastComponent,
    CYoutubePlayerComponent,
    CImageGalleryComponent,
    CCodeBoxComponent,
    CAudioPlayerComponent,
    CTableComponent,
    CListComponent,
    CQuoteListComponent,
    CScrollAnimationDirective,
  ],
})
export class CloudWalkersDevopsNgModule {
  static forRoot(
    config: CloudWalkersDevopsNgModuleConfig
  ): ModuleWithProviders<CloudWalkersDevopsNgModule> {
    return {
      ngModule: CloudWalkersDevopsNgModule,
      providers: [{ provide: 'config', useValue: config }],
    };
  }
}
