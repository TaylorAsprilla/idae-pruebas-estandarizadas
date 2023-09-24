import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'app',
    component: PagesComponent,

    loadChildren: () =>
      import('../routes/child-routes.module').then((m) => m.ChildRoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
