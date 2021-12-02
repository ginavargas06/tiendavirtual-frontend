import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Factura } from '../lista/factura';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponentFactura implements OnInit {

  factura: Factura = new Factura();

  constructor( private facturaServicio: FacturaService, private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    console.log('Factura');
    this.router.navigate(['facturas']);
  }

  guardar (){
    this.facturaServicio.guardarFactura(this.factura).subscribe(data => {
      alert('Factura creado con exito');
      this.router.navigate(['facturas']);
    });
  }

}