import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CloudWalkersDevopsNgModule } from 'cloud-walkers-devops-ng';
import { enviroment } from '../environments/enviroment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudWalkersDevopsNgModule.forRoot({
      env: enviroment,
      forceMobile: false,
      debuggerTab: true,
      reducer: null,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
