import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from 'src/app/services/data.service';

import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';
import { TablaComponent } from './tabla/tabla.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    ExplorerComponent,
    ResumeComponent,
    TablaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExplorerComponent
  ]
})
export class VentasModule { }
