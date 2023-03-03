import { Component, OnInit } from '@angular/core';
import { VideoJuego } from 'src/app/models/videoJuego.model';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit {
  miListaFavoritos: VideoJuego[] = [];

  constructor(private tiendaService: TiendaService) {
    this.miListaFavoritos = this.tiendaService.miListaFavoritos;
  }

  ngOnInit(): void {
  }

  eliminarFavorito(id: number) {
    this.tiendaService.eliminarFavoritoService(id);
  }
  
}
