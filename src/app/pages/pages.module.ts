import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages.routing';
import { UltimoPuntajeComponent } from './ultimo-puntaje/ultimo-puntaje.component';
import { MensajePuntajeComponent } from './mensaje-puntaje/mensaje-puntaje.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    UltimoPuntajeComponent,
    MensajePuntajeComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  exports: [UltimoPuntajeComponent, MensajePuntajeComponent],
})
export class PagesModule {}
