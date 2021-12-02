import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponentUsuario implements OnInit {
  usuarios!: Usuario[];
  usuario: Usuario = new Usuario();

  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    console.log('inicializando el modulo');
    this.usuarioServicio
    .getAllUsuarios()
    .subscribe(data => {
      console.log('obtuvo usuarios del backend', data);
      this.usuarios = data;
    });

  }

  crearUsuario() {
    console.log('Crear usuario');
    this.router.navigate(['usuarios/crear']);

  }

  editarUsuario(usuario: Usuario){
    console.log('Editar Usuario');
    localStorage.setItem("usuarioEditar", usuario._id);
    this.router.navigate(['usuarios/editar'])
  }

  borrarUsuario(usuario: Usuario){
    console.log('Borrar usuario');
    this.usuarioServicio.borrarUsuario(usuario).subscribe(data =>{
      alert('Usuario eliminado con exito');
      this.usuarioServicio
    .getAllUsuarios()
    .subscribe(data => {
      console.log('obtuvo usuarios del backend', data);
      this.usuarios = data;
    });
    });
  }

}