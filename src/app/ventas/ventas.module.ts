import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    ExplorerComponent,
    ResumeComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExplorerComponent
  ]
})
export class VentasModule { }
