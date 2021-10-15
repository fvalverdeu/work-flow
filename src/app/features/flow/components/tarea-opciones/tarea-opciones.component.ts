import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tarea-opciones',
  templateUrl: './tarea-opciones.component.html',
  styleUrls: ['./tarea-opciones.component.scss']
})
export class TareaOpcionesComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
      this.items = [
          {label: 'Datos Generales', icon: 'pi pi-fw pi-home', routerLink: ['datos-generales']},
          {label: 'Actores', icon: 'pi pi-fw pi-calendar', routerLink: ['actores']},
          {label: 'Tiempos', icon: 'pi pi-fw pi-pencil', routerLink: ['tiempos']},
          {label: 'Notificaciones', icon: 'pi pi-fw pi-file', routerLink: ['notificaciones']},
      ];
  }

}
