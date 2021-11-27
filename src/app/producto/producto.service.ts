import { Producto } from './lista/producto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/productos';

  getAllProductos() {
    return this.http.get<Producto[]>(this.url);
  }

  guardarProducto(producto: Producto) {
    console.log('Guardando producto', producto);
    return this.http.post<Producto>(this.url, producto);
  }

  actualizarProducto(producto: Producto){
    console.log('Producto actualizado', producto);
    return this.http.put<Producto>(this.url  + '/' + producto._id,producto);
  }

  getById(id: any) {
    return this.http.get<Producto[]>(this.url + '/' + id);
  }

  borrarProducto(producto:Producto){
    return this.http.delete<Producto>(this.url  + '/' + producto._id);
  }
}
