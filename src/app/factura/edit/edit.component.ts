import { Factura } from './../../factura/lista/factura';
import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/factura/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentFactura implements OnInit {

  constructor(
    private facturaServicio: FacturaService,
    private router: Router
  ) {}
  factura: Factura = new Factura();

  ngOnInit(): void {
    console.log(localStorage.getItem('facturaEditar'));
    this.facturaServicio
      .getById(localStorage.getItem('facturaEditar'))
      .subscribe((data) => {
        console.log(data);
        this.factura = data.shift() as Factura;
        console.log(this.factura);
      });
  }

  guardar() {
    this.facturaServicio.actualizarFactura(this.factura).subscribe((data) => {
      alert('Factura actualizado con exito');
      this.router.navigate(['facturas']);
    });
  }
}
