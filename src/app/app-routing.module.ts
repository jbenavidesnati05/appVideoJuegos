import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { VideoJuegosComponent } from './componentes/video-juegos/video-juegos.component';

const routes: Routes =
 [
  { path: '', redirectTo:'video-juegos',pathMatch:'full' },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'video-juegos', component: VideoJuegosComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
