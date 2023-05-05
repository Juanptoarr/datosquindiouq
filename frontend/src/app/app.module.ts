import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { GolesComponent } from './components/jugadores/goles/goles.component';
import { ParticipacionesComponent } from './components/jugadores/participaciones/participaciones.component';
import { DeportesquindioComponent } from './components/jugadores/deportesquindio/deportesquindio.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    GolesComponent,
    ParticipacionesComponent,
    DeportesquindioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
