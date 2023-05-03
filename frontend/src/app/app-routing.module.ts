import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { GolesComponent } from './components/jugadores/goles/goles.component';
import { ParticipacionesComponent } from './components/jugadores/participaciones/participaciones.component';
import { DeportesquindioComponent } from './components/jugadores/deportesquindio/deportesquindio.component';

const routes: Routes = [
  { path: '', component: JugadoresComponent },
  { path: 'goles', component: GolesComponent },
  { path: 'participaciones', component: ParticipacionesComponent },
  { path: 'deportes-quindio', component: DeportesquindioComponent }, // Nueva ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

