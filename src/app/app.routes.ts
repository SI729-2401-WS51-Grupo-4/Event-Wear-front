import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {EnviosListaComponent} from "./envios/components/envios-lista/envios-lista.component";

export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'micuenta/lista-envios', component: EnviosListaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

  ];
