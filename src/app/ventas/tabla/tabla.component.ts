import { Component, Input } from '@angular/core';

import { Videojuegos } from 'src/app/models/videojuegos';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {

  
  @Input() mensaje: string = '';

  @Input() listadoVideojuegos: Videojuegos[] = [];

  juegoSeleccionado: Videojuegos | null = null;

  rutaImagen = '../assets/img/juegos/';
}
