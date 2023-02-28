import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { VideoJuego } from '../../models/videoJuego.model';

@Component({
  selector: 'app-video-juego',
  templateUrl: './video-juego.component.html',
  styleUrls: ['./video-juego.component.scss'],
})
export class VideoJuegoComponent implements OnInit {


  @Input() juego: VideoJuego = {
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

  @Output() favoritoAgregado = new EventEmitter<VideoJuego>();
  @Output() mostrarVideoJuego = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.juego);
  }
  agregarFavoritos(){
    this.favoritoAgregado.emit(this.juego)
  }
  mostrarDetalle(){
      this.mostrarVideoJuego.emit(this.juego.id)
  }
}
