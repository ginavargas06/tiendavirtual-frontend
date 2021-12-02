import { Inventario } from './lista/inventario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/inventario';

  getAllProductos() {
    return this.http.get<Inventario[]>(this.url);
  }

  guardarInventario(inventario: Inventario) {
    console.log('Guardando inventarioo', inventario); 
    return this.http.post<Inventario>(this.url, inventario);
  }

  actualizarInventario(inventario: Inventario){
    console.log('Inventario actualizado', inventario);
    return this.http.put<Inventario>(this.url  + '/' + inventario._id,inventario);
  }

  getById(id: any) {
    return this.http.get<Inventario[]>(this.url + '/' + id);
  }

  borrarProducto(inventario:Inventario){
    return this.http.delete<Inventario>(this.url  + '/' + inventario._id);
  }
}
