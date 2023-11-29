import { Component } from '@angular/core';
import { Videojuegos } from 'src/app/models/videojuegos';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {
  dataGames: Videojuegos[] = [];
  mensaje="No se encontraronn datos";
  
  constructor (private dataServ:DataService) {

  }
  
  ngOnInit() {
    
    this.getGamesLista();
  }

  private getGamesLista() {
    this.mensaje = "Cargando";

    this.dataServ.getGamesLista()
      .subscribe(x => {
        this.mensaje = x.length+ "";

        this.dataGames = x;
      });
  }


  // get mensaje(): string {
  //   if (this.cargandoVideojuegos) {
  //     return 'Cargando...';
  //   } else {

  //     return this.dataGames.length > 0 ?
  //       `${this.getGamesLista.length} registros encontrados.` :
  //       'No se han encontrado registros...';

  //   }

  // }
}
