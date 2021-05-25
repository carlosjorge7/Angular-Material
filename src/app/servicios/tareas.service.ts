import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }

  getAllTareas(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
