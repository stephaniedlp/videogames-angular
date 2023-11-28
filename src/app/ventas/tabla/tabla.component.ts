import { Component, Input } from '@angular/core';
import { Videojuegos } from 'src/app/models/videojuegos';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {

  @Input() listadoVideojuegos: Videojuegos[] = [];

  rutaImagen = '../../../../assets/img/real-estate/';
}
