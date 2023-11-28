import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http'
import { DashboardModule } from './dashboard/dashboard.module';
import { VentasModule } from './ventas/ventas.module';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    DashboardModule,
    VentasModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
