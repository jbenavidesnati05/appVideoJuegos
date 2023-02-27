import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    console.log(this.juego);
  }
}
