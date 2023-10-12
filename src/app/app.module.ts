import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReversePipe } from './reverse.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ReversePipe],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
