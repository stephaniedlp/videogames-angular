import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ExplorerComponent } from './ventas/explorer/explorer.component';
import { ResumeComponent } from './ventas/resume/resume.component';
import { TablaComponent } from './ventas/tabla/tabla.component';
import { PaginaNoEncontradaComponent } from './autenticacion/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'explorer', component: ExplorerComponent },
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component: PaginaNoEncontradaComponent } //componente not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
