import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './producto/add/add.component';
import { ListaComponent } from './producto/lista/lista.component';

const routes: Routes = [
  {
    path: 'productos', component: ListaComponent
  }, {
    path: 'productos/crear', component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
