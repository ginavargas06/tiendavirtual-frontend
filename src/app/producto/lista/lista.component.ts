import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos!: Producto[];

  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    console.log('inicializando el modulo');
    this.productoServicio
    .getAllProductos()
    .subscribe(data => {
      console.log('obtuvo productos del backend', data);
      this.productos = data;
    });

  }

  crearProducto() {
    console.log('Crear producto');
    this.router.navigate(['productos/crear']);

  }

}
