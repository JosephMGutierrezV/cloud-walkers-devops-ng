import { Component } from '@angular/core';
import { IParamsList } from 'projects/cloud-walkers-devops-ng/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public task = [
    {
      id: '1',
      name: 'Tarea 1',
      start: '2023-05-10',
      end: '2023-05-12',
      progress: 50,
      dependencies: ''
    }
  ];
}
