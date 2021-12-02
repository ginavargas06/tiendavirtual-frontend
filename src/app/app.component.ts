import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendavirtual';

  constructor(private router: Router) {};

  listarProductos() {
    this.router.navigate(['productos']);

  }

  listarFacturas() {
    this.router.navigate(['facturas']);

  }

  listarUsuarios(){
    this.router.navigate(['usuarios']);
  }

}
