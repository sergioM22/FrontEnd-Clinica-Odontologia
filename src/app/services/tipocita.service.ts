import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCita } from '../model/tipocita';

@Injectable({
  providedIn: 'root'
})
export class tipocitaService {
  private url: string= 'http://localhost:8080/tipocita';
  
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<TipoCita[]>(this.url);
  }

  public agregarTipo(bean:TipoCita){
    return this.http.post(`${this.url}/registrar/`,bean);

  }


  }

}
