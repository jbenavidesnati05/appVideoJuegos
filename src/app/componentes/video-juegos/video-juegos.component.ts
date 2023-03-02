import { Component, OnInit } from '@angular/core';
import { VideoJuego } from 'src/app/models/videoJuego.model';
import { VideoJuegoService } from 'src/app/servicios/video-juego.service';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-video-juegos',
  templateUrl: './video-juegos.component.html',
  styleUrls: ['./video-juegos.component.scss'],
})
export class VideoJuegosComponent implements OnInit {
  listajuegos: VideoJuego[] = [];
  videoJuegoVerMas: any;
  miListaFavoritos: VideoJuego[] = [];
  cantidadFavoritos = 0;
  VideoJuegofavorito: VideoJuego = {
    id: 0,
    title: '',
    thumbnail: '',
    short_description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: '',
  };

  constructor(
    private videoJuegoService: VideoJuegoService,
    private tiendaService: TiendaService
  ) {
    this.listajuegos = this.tiendaService.getListaJuegos();
    this.miListaFavoritos = this.tiendaService.miListaFavoritos;
  }

  ngOnInit(): void {
    this.videoJuegoService.getVideoJuegos().subscribe((data) => {
      this.listajuegos = data;
    });
  }
  adicionarFavorito(juego: VideoJuego) {
    this.tiendaService.agregarfavoritoService(juego);
  }
  abrirMostrarVideo(id: number) {
    this.videoJuegoService.getVideoJuego(id).subscribe((data) => {
      this.VideoJuegofavorito = data;
    });
  }
}
