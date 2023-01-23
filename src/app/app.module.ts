import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { AppRoutes } from './routes';
import { ComponentComponent } from './component/component.component';
import { MappaComponent } from './mappa/mappa.component';
import { GlossarioComponent } from './glossario/glossario.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ComponentComponent,
    MappaComponent,
    GlossarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes) //serve per importare tutte le routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }