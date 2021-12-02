import { Usuario } from './lista/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/';

  getAllUsuarios() {
    return this.http.get<Usuario[]>(this.url + 'consultarUsuario');
  }

  guardarUsuario(usuario: Usuario) {
    console.log('Guardando usuario', usuario);
    return this.http.post<Usuario>(this.url + 'crearUsuario', usuario);
  }

  actualizarUsuario(usuario: Usuario){
    console.log('Usuario actualizado', usuario);
    return this.http.put<Usuario>(this.url  + 'actualizarUsuario/' + usuario._id, usuario);
  }

  getById(id: any) {
    return this.http.get<Usuario[]>(this.url + 'consultarUsuario/' + id);
  }

  borrarUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.url  + 'eliminarUsuario/' + usuario._id);
  }
}
