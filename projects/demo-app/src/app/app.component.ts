import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    cols: 10,
    rows: 10,
    name: 'input-text',
  };

  public paramsInputTextDisabled = {
    label: 'Input Text',
    helpText: 'This is a help text',
    disabled: true,
    cols: 10,
    rows: 10,
    name: 'input-text-disabled',
  };

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }
}
