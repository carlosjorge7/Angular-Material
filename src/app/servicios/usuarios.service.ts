import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAllUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUsuario(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
