import { Component, OnInit } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import {Cart} from '../../model/cart.entity';
import {NgForOf} from "@angular/common";
import {CartsService} from '../../services/cart.service';
import {MatDivider} from "@angular/material/divider";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDivider, MatButton, RouterLink, ReactiveFormsModule, MatIcon, MatIconButton],
})
export class CartListComponent {
  cartItems: Cart[] = [];

  constructor(private cartService: CartsService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCartItems().subscribe((data: Cart[]) => {
      this.cartItems = data;
    });
  }
  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId).subscribe(() => {
      // Actualizar la lista de elementos del carrito después de eliminar un elemento
      this.getCartItems();
    });
  }
  calculateTotal() {
    // Calcular el total de la compra sumando los precios de los productos en el carrito
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

}
