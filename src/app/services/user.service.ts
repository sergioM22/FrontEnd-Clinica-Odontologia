import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //adaptacion S.Y 20231028
    private url: string= 'http://localhost:8080/usuarios';
    listar(){
      return this.httpClient.get<Usuario[]>(this.url+"/");
    }
  //fin adaptacion
    constructor(private httpClient: HttpClient) { }
    getAll() {
      return this.httpClient.get<Usuario[]>(this.url + "/")
    }
    public añadirUsuario(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/`,user);
    }
    public añadirMedico(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/registrarMedico/`,user);
    }
}
