import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoJuego } from '../models/videoJuego.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  miListaFavoritos: VideoJuego[] = [];
  private listaJuegos: VideoJuego[] = [];

  constructor(private http: HttpClient) {}
  getListaJuegos() {
    return this.listaJuegos;
  }

  agregarfavoritoService(juego: VideoJuego) {
    if (!this.miListaFavoritos.includes(juego)) {
      this.miListaFavoritos.push(juego);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado a favoritos con exito!!!',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Este videojuego',
        text: 'ya fue agregado a favoritos',
        footer: '',
      });
    }
  }

  eliminarFavoritoService(id: number) {
    Swal.fire({
      title: 'Deseas eliminarlo de tu lista de favoritos ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.miListaFavoritos.splice(id, 1);
        Swal.fire('Videojuego eliminado!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('El videojuego no fue eliminado', '', 'info');
      }
    });
  }
}
