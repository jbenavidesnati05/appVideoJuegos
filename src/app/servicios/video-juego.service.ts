import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoJuego } from '../models/videoJuego.model';

@Injectable({
  providedIn: 'root',
})
export class VideoJuegoService {

  constructor(private http: HttpClient) {
    console.log('servicio video juegos');
  }
  getVideoJuegos() {
    return this.http.get<VideoJuego[]>('/api/games?category=shooter')
    }








}
