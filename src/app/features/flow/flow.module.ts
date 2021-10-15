import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PickListModule} from 'primeng/picklist';

import { FlowComponent } from './flow.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { ActoresComponent } from './components/actores/actores.component';
import { TiemposComponent } from './components/tiempos/tiempos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { FlowRoutingModule } from './flow-routing.module';
import { TareaComponent } from './components/tarea/tarea.component';
import { ConectorComponent } from './components/conector/conector.component';
import { TareaOpcionesComponent } from './components/tarea-opciones/tarea-opciones.component';
import { ConectorOpcionesComponent } from './components/conector-opciones/conector-opciones.component';




@NgModule({
  declarations: [
    FlowComponent,
    DatosGeneralesComponent,
    ActoresComponent,
    TiemposComponent,
    NotificacionesComponent,
    TareaComponent,
    ConectorComponent,
    TareaOpcionesComponent,
    ConectorOpcionesComponent
  ],
  imports: [
    CommonModule,
    FlowRoutingModule,
    FormsModule,
    TabMenuModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    PickListModule
  ]
})
export class FlowModule { }
