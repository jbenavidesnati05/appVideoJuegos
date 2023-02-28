import { Component, OnInit, Input } from '@angular/core';
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
  showList = true;

  constructor(
    private videoJuegoService: VideoJuegoService,
    private tiendaService: TiendaService
  ) {
    this.listajuegos = this.tiendaService.getListaJuegos();
  }

  ngOnInit(): void {
    this.videoJuegoService.getVideoJuegos().subscribe((data) => {
      this.listajuegos = data;
      console.log(this.listajuegos);
    });
  }
  mostrarDetalle(){
  }
}
