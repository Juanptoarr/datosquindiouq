import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  filtro = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  limpiarPagina() {
      localStorage.clear();
    }

  filtrar(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.filtro = target.value;
      if (this.filtro === 'goles') {
        this.router.navigate(['/goles']);
      } else if (this.filtro === 'participaciones') {
        this.router.navigate(['/participaciones']);
      }
    }
  }

}










