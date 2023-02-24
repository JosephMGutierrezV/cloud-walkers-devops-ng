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

@NgModule({
  declarations: [
    CloudWalkersDevopsNgComponent,
    CInputTextComponent,
    CTextAreaComponent,
    CButtonComponent,
    CToolTipDirective,
    CBookMarkDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CloudWalkersDevopsNgModuleConfig],
  exports: [
    CloudWalkersDevopsNgComponent,
    CInputTextComponent,
    CTextAreaComponent,
    CButtonComponent,
    CToolTipDirective,
    CBookMarkDirective,
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
