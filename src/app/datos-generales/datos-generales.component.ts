import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { observable } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {
  options: FormGroup;
  tareas=[];

  constructor(fb: FormBuilder,private  taskService: TaskService) {
    this.options = fb.group({
      nombre: '',
      estado: '',
      descripcion: '',
    });
  }
 

  ngOnInit() {
    this.ObtenerTareas();
  }

  send(){
    const data =this.options.value;
    console.log(data)
  }
  cancelar(){
  this.options.reset;
  }

  ObtenerTareas(){
   this.taskService.getTaskList().subscribe(response => {
     this.tareas=response;
     console.log(this.tareas)
   });

  }


}
