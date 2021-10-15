import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';

export interface Tipo {
  value: string;
  viewValue: string;
}

export interface Origen {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  options: FormGroup;
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  tipos: Tipo[] = [
    {value: 'propietario-0', viewValue: 'Propietario(s)'},
    {value: 'responsable-1', viewValue: 'Responsable(s)'},
    {value: 'editor-2', viewValue: 'Editor(es)'},
    {value: 'lector-2', viewValue: 'Lector(es)'}
  ];

  origenes: Origen[] = [
    {value: 'roles-0', viewValue: 'Roles'},
    {value: 'campo-1', viewValue: 'Campo'},
    {value: 'usuario-2', viewValue: 'Usuario'}
    
  ];
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      nombre: '',
      estado: '',
      descripcion: '',
    });
  }

  ngOnInit() {
  }
  send(){
    const data =this.options.value;
    console.log(data)
  }
  cancelar(){
  this.options.reset;
  }



}
