import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../lista/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponentUsuario implements OnInit {

  usuario: Usuario = new Usuario();

  constructor( private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    console.log('Usuario');
    this.router.navigate(['usuarios']);
  }

  guardar (){
    this.usuarioServicio.guardarUsuario(this.usuario).subscribe(data => {
      alert('Usuario creado con exito');
      this.router.navigate(['usuarios']);
    });
  }

}
