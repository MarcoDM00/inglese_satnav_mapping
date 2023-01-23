import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TomtomComponent } from './tomtom/tomtom.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { OpenstreetComponent } from './openstreet/openstreet.component';
import { DefaultComponent } from './default/default.component';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    TomtomComponent,
    GooglemapsComponent,
    OpenstreetComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes) //serve per importare tutte le routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }