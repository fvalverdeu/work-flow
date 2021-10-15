
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { ActoresComponent } from './actores/actores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiemposComponent } from './Tiempos/Tiempos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import{HttpClientModule}from '@angular/common/http';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [				
    AppComponent,
      DatosGeneralesComponent,
      ActoresComponent,
      TiemposComponent,
      NotificacionesComponent,
      MessageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule
   

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule { }
