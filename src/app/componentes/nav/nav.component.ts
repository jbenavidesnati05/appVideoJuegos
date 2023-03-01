import { Component, OnInit } from '@angular/core';
import { VideoJuego } from 'src/app/models/videoJuego.model';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  miListaFavoritos:VideoJuego[]=[]


  constructor(
    private tiendaService: TiendaService
  ) {
    this.miListaFavoritos = this.tiendaService.miListaFavoritos;
   }

  ngOnInit(): void {
    console.log(this.miListaFavoritos);
  }

}
