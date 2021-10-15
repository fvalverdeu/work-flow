import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-Tiempos',
  templateUrl: './Tiempos.component.html',
  styleUrls: ['./Tiempos.component.css']
})
export class TiemposComponent implements OnInit {
  options: FormGroup;

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
