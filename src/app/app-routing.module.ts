import { EditComponent } from './producto/edit/edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './producto/add/add.component';
import { ListaComponent } from './producto/lista/lista.component';

import { AddComponentFactura } from './factura/add/add.component';
import { EditComponentFactura } from './factura/edit/edit.component';
import { ListaComponentFactura } from './factura/lista/lista.component';

const routes: Routes = [
  {
    path: 'productos', component: ListaComponent
  }, {
    path: 'productos/crear', component: AddComponent
  },{
    path:'productos/editar',component: EditComponent
  },{
    path: 'facturas', component: ListaComponentFactura
  }, {
    path: 'facturas/crear', component: AddComponentFactura
  },{
    path:'facturas/editar',component: EditComponentFactura
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
