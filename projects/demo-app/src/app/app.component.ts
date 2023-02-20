import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'demo-app';
  public paramsInputText = {
    label: 'Input Text',
    helpText: 'This is a help text',
    disabled: false,
  };
}
