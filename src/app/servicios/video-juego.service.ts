import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoJuegoService {

  url = '/api/games?category=shooter';

  constructor(private http: HttpClient) {
    console.log('servicio video juegos');
  }
  getVideoJuegos() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this.url, {
      headers: header,
    });
  }
}
