import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './componentes/video-juego/video-juego.component';
import { VideoJuegosComponent } from './componentes/video-juegos/video-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    VideoJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
