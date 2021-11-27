import { Producto } from './../../producto/lista/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/producto/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private productoServicio: ProductoService,
    private router: Router
  ) {}
  producto: Producto = new Producto();

  ngOnInit(): void {
    console.log(localStorage.getItem('productoEditar'));
    this.productoServicio
      .getById(localStorage.getItem('productoEditar'))
      .subscribe((data) => {
        console.log(data);
        this.producto = data.shift() as Producto;
        console.log(this.producto);
      });
  }

  guardar() {
    this.productoServicio.actualizarProducto(this.producto).subscribe((data) => {
      alert('Producto actualizado con exito');
      this.router.navigate(['productos']);
    });
  }
}
