import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../model/cita';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  citaActualizar = new Subject<Cita[]>();

  private url: string= 'http://localhost:8080/citas';
  constructor(private http: HttpClient) { }
  
  listar(){
    return this.http.get<Cita[]>(this.url+"/");
  }
  listarCitasPendientes(){
    return this.http.get<Cita[]>(`${this.url}/obtenerCitasPorEstado/${1}`);
  }
  listarCitasEspera(){
    return this.http.get<Cita[]>(`${this.url}/obtenerCitasPorEstado/${2}`);
  }
  listarCitasCompletados(){
    return this.http.get<Cita[]>(`${this.url}/obtenerCitasPorEstado/${3}`);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  editar(cita: Cita){
    return this.http.put(this.url, cita);
  }
  registrar(cita: Cita){
    return this.http.post(this.url, cita);
  }
  listarPorId(id:number){
    return this.http.get<Cita>(`${this.url}/${id}`);
  }
}
