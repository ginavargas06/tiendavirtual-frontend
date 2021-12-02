import { EditComponent } from './producto/edit/edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './producto/add/add.component';
import { ListaComponent } from './producto/lista/lista.component';

import { AddComponentFactura } from './factura/add/add.component';
import { EditComponentFactura } from './factura/edit/edit.component';
import { ListaComponentFactura } from './factura/lista/lista.component';

import { AddComponentUsuario } from './usuario/add/add.component';
import { EditComponentUsuario } from './usuario/edit/edit.component';
import { ListaComponentUsuario } from './usuario/lista/lista.component';

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
  },{
    path: 'usuarios', component: ListaComponentUsuario
  },{
    path: 'usuarios/crear', component: AddComponentUsuario
  },{
    path: 'usuarios/editar', component: EditComponentUsuario
  }
    path:'inventario/crear',component: AddComponent
  },{
    path:'inventario/editar',component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
