import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import {AuthenticationSectionComponent} from "./iam/components/authentication-section/authentication-section.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatMenuModule, FormsModule, AuthenticationSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'envios-bd';

    options = [
      { path: '/home', title: 'Home'},
      { path: 'micuenta/lista-envios', title: 'Envios'},

      { path: '/product-list', title: 'Product List'},
      { path: '/product-list/1', title: 'Product Detail'},
      { path: '/category', title: 'Category'},
      { path: '/cart', title: 'Cart Detail'},
      { path: '/pay-list', title: 'Pay list'},
      { path: '/user-option', title: 'User-Option'},
      { path: '/details', title: 'Details'},
      { path: '/chats', title: 'Chats'},
      { path: '/messages', title: 'Messages'},
      { path : '/orden/envio-formulario', title: 'Formulario'}



    ]


}
