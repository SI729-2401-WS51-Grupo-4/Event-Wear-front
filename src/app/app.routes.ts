import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";

import {LoginComponent} from "./public/pages/login/login.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {UserOptionComponent} from "./public/pages/user-option/user-option.component";

import {EnviosListaComponent} from "./envios/components/envios-lista/envios-lista.component";

import {ProductDetailsComponent} from "./details/pages/product-details/product-details.component";

import {ProductCardComponent} from "./products/components/product-card/product-card.component";
import {ProductFormComponent} from "./products/components/product-form/product-form.component";
import {CartListComponent} from "./cart/components/cart-list/cart-list.component";

import {ProductListComponent} from "./categories/components/product-list/product-list.component";
import {ItemCardComponent} from "./transactions/components/item-card/item-card.component";

import {UserChatsComponent} from "./chats/components/user-chats/user-chats.component";
import {MessagesComponent} from "./chats/components/messages/messages.component";


export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'micuenta/lista-envios', component: EnviosListaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

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

  { path: 'chats', component: UserChatsComponent},
    { path: 'messages', component: MessagesComponent}






  ];
