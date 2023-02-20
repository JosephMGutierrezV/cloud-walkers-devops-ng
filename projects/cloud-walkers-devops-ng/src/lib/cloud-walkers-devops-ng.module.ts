import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CloudWalkersDevopsNgComponent } from './cloud-walkers-devops-ng.component';
import { CInputTextComponent } from './components/input-text/input-text.component';
import { CloudWalkersDevopsNgModuleConfig } from './entities/lib-configuration';

@NgModule({
  declarations: [CloudWalkersDevopsNgComponent, CInputTextComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CloudWalkersDevopsNgModuleConfig],
  exports: [CloudWalkersDevopsNgComponent, CInputTextComponent],
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
