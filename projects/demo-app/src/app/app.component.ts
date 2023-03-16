import { Component } from '@angular/core';
import { IParamsTable } from 'projects/cloud-walkers-devops-ng/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public paramsTable: IParamsTable = {
    caption: 'Ejemplo de Tabla',
    columns: [
      {
        header: 'Nombre',
        field: 'name',
        type: 'string',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        filterPlaceholder: 'Buscar por nombre',
        filterType: 'text',
        filterMaxLength: 100,
        filterMinLength: 1,
        filterMax: 0,
        filterMin: 0,
        filterStep: 0,
      },
      {
        header: 'Edad',
        field: 'age',
        type: 'number',
        sortable: true,
        filter: true,
        filterMatchMode: 'equals',
        filterPlaceholder: 'Buscar por edad',
        filterType: 'number',
        filterMaxLength: 0,
        filterMinLength: 0,
        filterMax: 100,
        filterMin: 18,
        filterStep: 1,
      },
      {
        header: 'Correo electrónico',
        field: 'email',
        type: 'string',
        sortable: false,
        filter: true,
        filterMatchMode: 'contains',
        filterPlaceholder: 'Buscar por correo electrónico',
        filterType: 'email',
        filterMaxLength: 100,
        filterMinLength: 5,
        filterMax: 0,
        filterMin: 0,
        filterStep: 0,
      },
    ],
    rows: [
      {
        name: 'Juan Pérez',
        age: 32,
        email: 'juan.perez@example.com',
      },
      {
        name: 'María García',
        age: 27,
        email: 'maria.garcia@example.com',
      },
      {
        name: 'Pedro Sánchez',
        age: 45,
        email: 'pedro.sanchez@example.com',
      },
      {
        name: 'Lucía Fernández',
        age: 20,
        email: 'lucia.fernandez@example.com',
      },
    ],
  };
}
