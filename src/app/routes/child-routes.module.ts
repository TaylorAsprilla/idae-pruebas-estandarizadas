import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UltimoPuntajeComponent } from '../pages/ultimo-puntaje/ultimo-puntaje.component';
import { MensajePuntajeComponent } from '../pages/mensaje-puntaje/mensaje-puntaje.component';

const childRoutes: Routes = [
  {
    path: 'inicio',
    component: UltimoPuntajeComponent,
  },
  {
    path: 'mensaje-puntaje',
    component: MensajePuntajeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
