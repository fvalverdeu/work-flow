import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      para: '',
      copia: '',
      cc: '',
      asunto: '',
      cuerpo: '',
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
