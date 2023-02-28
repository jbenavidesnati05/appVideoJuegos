import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoJuego } from '../models/videoJuego.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private listaJuegos : VideoJuego[] =[]

  constructor(
    private http :HttpClient
  ) {
   }
 getListaJuegos(){
  return this.listaJuegos
 }

}
