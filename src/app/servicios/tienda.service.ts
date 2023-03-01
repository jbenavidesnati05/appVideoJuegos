import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoJuego } from '../models/videoJuego.model';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  miListaFavoritos: VideoJuego[] = [];
  cantidadFavoritos = 0;

  private listaJuegos: VideoJuego[] = [];

  constructor(private http: HttpClient) {}
  getListaJuegos() {
    return this.listaJuegos;
  }

  agregarfavoritoService(juego: VideoJuego) {
    this.miListaFavoritos.push(juego);
    console.log(this.miListaFavoritos);
  }
}
