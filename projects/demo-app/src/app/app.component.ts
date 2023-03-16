import { Component } from '@angular/core';
import { IParamsList } from 'projects/cloud-walkers-devops-ng/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data: IParamsList = {
    iconList: 'assets/gifs/cloud-spin30.gif',
    items: [
      {
        label: 'Inicio',
        icon: 'home',
        link: '/inicio',
        disabled: false,
        hidden: false,
      },
      {
        label: 'Perfil',
        icon: 'user',
        link: '/perfil',
        disabled: false,
        hidden: false,
      },
      {
        label: 'Mensajes',
        icon: 'message',
        link: '/mensajes',
        disabled: false,
        hidden: false,
      },
      {
        label: 'Configuración',
        icon: 'settings',
        link: '/configuracion',
        disabled: false,
        hidden: false,
      },
      {
        label: 'Cerrar Sesión',
        icon: 'logout',
        link: '/cerrar-sesion',
        disabled: false,
        hidden: false,
      },
      {
        label: 'Contacto',
        icon: 'contact',
        link: '/contacto',
        disabled: false,
        hidden: true,
      },
    ],
  };
}
