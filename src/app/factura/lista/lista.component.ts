import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaService } from '../factura.service';
import { Factura } from './factura';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponentFactura implements OnInit {

  facturas!: Factura[];
  factura: Factura = new Factura();

  constructor(private facturaServicio: FacturaService, private router: Router) { }

  ngOnInit(): void {
    console.log('inicializando el modulo');
    this.facturaServicio
    .getAllFacturas()
    .subscribe(data => {
      console.log('obtuvo facturas del backend', data);
      this.facturas = data;
    });

  }

  crearFactura() {
    console.log('Crear factura');
    this.router.navigate(['facturas/crear']);

  }

  editarFactura(factura: Factura){
    console.log('Editar factura');
    localStorage.setItem("facturaEditar", factura._id);
    this.router.navigate(['facturas/editar'])
  }

  borrarFactura(factura: Factura){
    console.log('Borrar factura');
    this.facturaServicio.borrarFactura(factura).subscribe(data =>{
      alert('Factura eliminado con exito');
      this.facturaServicio
    .getAllFacturas()
    .subscribe(data => {
      console.log('obtuvo facturas del backend', data);
      this.facturas = data;
    });
    });
  }

}
