import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'cloud-walkers-devops-ng';

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

  public paramsButton = {
    label: 'Mande su correo ya!',
    disabled: false,
    invalid: false,
  };

  public paramsButtonDisabled = {
    label: 'Desabilitado',
    disabled: true,
  };

  public form: FormGroup;

  constructor(private readonly messageService: MessageService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  click() {
    // generate randon text
    const randomText = Math.random().toString(36).substring(7);
    this.title = randomText;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
      life: 100000000000,
    });

    this.paramsButton.invalid = !this.paramsButton.invalid;
  }
}
