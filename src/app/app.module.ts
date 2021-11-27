import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './producto/lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule  } from '@angular/material/menu'
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './producto/add/add.component';
import { EditComponent } from './Producto/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
