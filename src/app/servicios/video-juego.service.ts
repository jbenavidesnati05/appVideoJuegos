import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoJuego } from '../models/videoJuego.model';

@Injectable({
  providedIn: 'root',
})
export class VideoJuegoService {


  constructor(private http: HttpClient) {
  }
  getVideoJuegos() {
    return this.http.get<VideoJuego[]>('/api/games?category=shooter')
    }
  getVideoJuego(id:number){
    return this.http.get<VideoJuego>(`api/game?id=${id}`)
  }








}
