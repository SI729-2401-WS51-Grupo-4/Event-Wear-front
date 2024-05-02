import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {ProductCardComponent} from "./products/components/product-card/product-card.component";
import {ProductFormComponent} from "./products/components/product-form/product-form.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'product-list', component: ProductCardComponent},
  { path: 'product-form', component: ProductFormComponent },
  { path: 'home', component: ProductCardComponent},
];
