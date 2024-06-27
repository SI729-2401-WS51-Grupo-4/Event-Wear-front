import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";

import {LoginComponent} from "./public/pages/login/login.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {UserOptionComponent} from "./public/pages/user-option/user-option.component";

import {EnviosListaComponent} from "./envios/components/envios-lista/envios-lista.component";
import {ShippingFormComponent} from "./envios/components/shipping-form/shipping-form.component";

import {ProductDetailsComponent} from "./details/pages/product-details/product-details.component";

import {ProductCardComponent} from "./products/components/product-card/product-card.component";
import {ProductFormComponent} from "./products/components/product-form/product-form.component";
import {CartListComponent} from "./cart/components/cart-list/cart-list.component";

import {ProductListComponent} from "./categories/components/product-list/product-list.component";
import {ItemCardComponent} from "./transactions/components/item-card/item-card.component";

import {CategoryDeleteComponent } from "./categories/components/category-delete/category-delete.component";

import {UserChatsComponent} from "./chats/components/user-chats/user-chats.component";
import {MessagesComponent} from "./chats/components/messages/messages.component";
import {CategoryFormComponent} from "./categories/components/category-form/category-form.component";
import {CategoryUpdateComponent} from "./categories/components/category-update/category-update.component";
import {CategoryGetbyIdComponent} from "./categories/components/category-getby-id/category-getby-id.component";
import {CategoryGetFavoritesComponent} from "./categories/components/category-get-favorites/category-get-favorites.component";
export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'micuenta/lista-envios', component: EnviosListaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'category-delete', component: CategoryDeleteComponent},
  { path: 'product-list', component: ProductCardComponent},
  { path: 'cart-list', component: CartListComponent},
  { path: 'product-form', component: ProductFormComponent },
  { path: 'cart', component: CartListComponent},
  { path: 'category', component: ProductListComponent},
  { path: 'pay-list', component: ItemCardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user-option', component: UserOptionComponent},
  { path: 'details', component: ProductDetailsComponent},
  {path: 'category-form', component: CategoryFormComponent},
  { path: 'chats', component: UserChatsComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'category-update', component: CategoryUpdateComponent},
  { path: 'category-getby-id', component: CategoryGetbyIdComponent},
  {path: 'category-get-favorites', component: CategoryGetFavoritesComponent},
  {path: 'orden/envio-formulario', component: ShippingFormComponent }

  ];
