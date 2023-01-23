import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ComponentComponent } from './component/component.component';
import { MappaComponent } from './mappa/mappa.component';
import { GlossarioComponent } from './glossario/glossario.component';

export const AppRoutes: Routes = [
  { path: '', component: DefaultComponent }, //specifico un percorso e il componente a cui assegno tale percorso
  {path: 'c1', component: MappaComponent},
  { path: 'c2/:id', component: ComponentComponent},
  {path: 'c3', component: GlossarioComponent}
];