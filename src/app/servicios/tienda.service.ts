import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoJuego } from '../models/videoJuego.model';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  miListaFavoritos: VideoJuego[] = [];
  private listaJuegos: VideoJuego[] = [];
  encontrado: number = 0;

  constructor(private http: HttpClient) {}
  getListaJuegos() {
    return this.listaJuegos;
  }

  // encontrar juego agregado a favoritos
  // encontrarJuegoFavorito(juego: VideoJuego) {
  //   var encontrado = this.miListaFavoritos.includes(juego);
  //   console.log(encontrado);
  // }

  agregarfavoritoService(juego: VideoJuego) {
    if (!this.miListaFavoritos.includes(juego)) {
      this.miListaFavoritos.push(juego);
      alert("Videojuego agregado con exito !!!")
    }else{
      alert("Este video ya esta en tu lista de favoritos !!!")
    }
  }

  eliminarFavoritoService(id: number) {
    let respuesta = confirm('¿Estas seguro de eliminar el videojuego?');
    if (respuesta) {
      this.miListaFavoritos.splice(id, 1);
    }
  }
}
