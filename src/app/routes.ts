import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { TomtomComponent } from './tomtom/tomtom.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { OpenstreetComponent } from './openstreet/openstreet.component';

export const AppRoutes: Routes = [
  { path: '', component: DefaultComponent }, //specifico un percorso e il componente a cui assegno tale percorso
  { path: 'c1', component: TomtomComponent }, //specifico un percorso con anche un dato. Se non è presente il dato, il percorso non si attiva
  { path: 'c2', component: GooglemapsComponent },
  { path: 'c3', component: OpenstreetComponent }
];