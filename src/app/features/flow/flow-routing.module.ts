import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './components/actores/actores.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { TiemposComponent } from './components/tiempos/tiempos.component';
import { FlowComponent } from './flow.component';

const routes: Routes = [
  {
    path: '',
    component: FlowComponent,
    children: [
        { path: 'datos-generales', component: DatosGeneralesComponent },
        { path: 'actores', component: ActoresComponent },
        { path: 'tiempos', component: TiemposComponent },
        { path: 'notificaciones', component: NotificacionesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowRoutingModule { }
