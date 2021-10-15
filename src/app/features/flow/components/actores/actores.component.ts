import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.scss']
})
export class ActoresComponent implements OnInit {

  list1: any[] = [];

  list2: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list1 = [
      'Gestor FM',
      'InspectorFM',
      'Gestor Cliente',
      'Inspector Cliente',
      'Proveedor',
      'Tecnico',
      'Help Desk',
      'Administrativo FM',
      'Asistente Administrativo'
    ];
    this.list2 = [
      'Propietario(s)',
      'Responsable(s)',
      'Editor(es)',
      'Lectores(es)'
    ];
  }

}
