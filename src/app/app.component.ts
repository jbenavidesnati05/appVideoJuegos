import { Component } from '@angular/core';
import { VideoJuegoService } from './servicios/video-juego.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda-videojuegos';
  public videoJuegos : Array<any>=[]

  constructor(
    private VideoJuegoService:VideoJuegoService
  ){
    this.VideoJuegoService.getVideoJuegos().subscribe((resp:any)=>{
      console.log(resp);
      this.videoJuegos = resp
    })

  }
}
