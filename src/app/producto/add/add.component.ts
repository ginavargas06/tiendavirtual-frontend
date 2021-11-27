import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../lista/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  producto: Producto = new Producto();

  constructor( private productoServicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    console.log('Producto');
    this.router.navigate(['productos']);
  }

  guardar (){
    this.productoServicio.guardarProducto(this.producto).subscribe(data => {
      alert('Producto creado con exito');
      this.router.navigate(['productos']);
    });
  }

}
