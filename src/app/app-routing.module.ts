import { EditComponent } from './Producto/edit/edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './producto/add/add.component';
import { ListaComponent } from './producto/lista/lista.component';

const routes: Routes = [
  {
    path: 'productos', component: ListaComponent
  }, {
    path: 'productos/crear', component: AddComponent
  },{
    path:'productos/editar',component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
