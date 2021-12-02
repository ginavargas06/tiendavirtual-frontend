import { Factura } from './lista/factura';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/';

  getAllFacturas() {
    return this.http.get<Factura[]>(this.url + 'consultarfacturas');
  }

  guardarFactura(factura: Factura) {
    console.log('Guardando factura', factura);
    return this.http.post<Factura>(this.url + 'crearfactura', factura);
  }

  actualizarFactura(factura: Factura){
    console.log('Factura actualizado', factura);
    return this.http.put<Factura>(this.url  + 'actualizarfactura/' + factura._id,factura);
  }

  getById(id: any) {
    return this.http.get<Factura[]>(this.url + 'consultarfactura/' + id);
  }

  borrarFactura(factura:Factura){
    return this.http.delete<Factura>(this.url  + 'eliminarfactura/' + factura._id);
  }
}
