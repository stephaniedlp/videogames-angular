import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Videojuegos } from 'src/app/models/videojuegos';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  @Input() juego: Videojuegos | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();


  onCloseModal() {
    this.close.emit();
  }

}
