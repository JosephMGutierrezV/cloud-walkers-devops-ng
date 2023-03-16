import { Component } from '@angular/core';
import { IParamsList } from 'projects/cloud-walkers-devops-ng/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data = {
    quote:
      'La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir avanzando.',
    author: 'Albert Einstein',
  };
}
