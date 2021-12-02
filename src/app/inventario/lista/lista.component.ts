import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../inventario.service';
import { Inventario } from './inventario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  inventarios!: Inventario[];
  inventario: Inventario = new Inventario();

  constructor(private inventarioServicio: InventarioService, private router: Router) { }

  ngOnInit(): void {
    console.log('inicializando el modulo');
    this.inventarioServicio
    
    .getAllInventario()
    .subscribe(data => {
      console.log('obtuvo productos del backend', data);
      this.inventario = data;
    });
  }

  crearInventario() {
    console.log('Crear inventario');
    localStorage.setItem("inventarioEditar", Inventario.productoId)
    this.router.navigate(['inventario/crear']);

  }

  editarProducto(inventario: Inventario){
    console.log('Editar producto');
    localStorage.setItem("inventarioEditar", inventario._id);
    this.router.navigate(['inventario/editar'])
  }

}
