import { Usuario } from './../../usuario/lista/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponentUsuario implements OnInit {
  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router
  ) {}
  usuario: Usuario = new Usuario();

  ngOnInit(): void {
    console.log(localStorage.getItem('usuarioEditar'));
    this.usuarioServicio
      .getById(localStorage.getItem('usuarioEditar'))
      .subscribe((data) => {
        console.log(data);
        this.usuario = data.shift() as Usuario;
        console.log(this.usuario);
      });
  }

  guardar() {
    this.usuarioServicio.actualizarUsuario(this.usuario).subscribe((data) => {
      alert('Usuario actualizado con exito');
      this.router.navigate(['usuarios']);
    });
  }
}