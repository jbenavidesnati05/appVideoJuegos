import { Component, OnInit } from '@angular/core';
import { VideoJuego } from '../../models/videoJuego.model';

@Component({
  selector: 'app-video-juego',
  templateUrl: './video-juego.component.html',
  styleUrls: ['./video-juego.component.scss']
})
export class VideoJuegoComponent implements OnInit {

  VideoJuego:VideoJuego ={
    developer: '',
    freetogame_profile_url: '',
    game_url: '',
    genre: '',
    id: 0,
    platform: '',
    publisher: '',
    release_date: '',
    short_description: '',
    thumbnail: '',
    title: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
