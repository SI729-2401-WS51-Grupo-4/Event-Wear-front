import { Component, OnInit } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import {Cart} from '../../model/cart.entity';
import {NgForOf} from "@angular/common";
import {CartsService} from '../../services/cart.service';
import {MatDivider} from "@angular/material/divider";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  standalone: true,
  imports: [RouterModule, MatCard, MatCardModule, NgForOf, MatDivider, MatButton, RouterLink, ReactiveFormsModule, MatIcon, MatIconButton, FormsModule],
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
  updateQuantity(cartItemId: number, quantity: number): void {
    this.cartService.updateQuantity(cartItemId, quantity).subscribe((updatedItem: Cart) => {
      // Verifica si updatedItem es nulo
      if (updatedItem) {
        // Actualiza la cantidad del producto en el carrito
        const item = this.cartItems.find(item => item.cartItemId === cartItemId);
        if (item) {
          item.quantity = updatedItem.quantity;
        }
      } else {
        console.error('updatedItem es nulo');
      }
      // Recarga todos los elementos del carrito después de que se actualiza la cantidad
      this.getCartItems();
    });
  }

  removeFromCart(cartItemId: number): void {
    const item = this.cartItems.find(item => item.cartItemId === cartItemId);
    if (item) {
      if (item.quantity > 1) {

        this.updateQuantity(cartItemId, item.quantity - 1);
      } else {

        this.cartService.removeFromCart(cartItemId).subscribe(() => {
          this.getCartItems();
        });
      }
    }
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.cartItems) {
      const quantity = Number(item.quantity) || 0;
      total += item.price * quantity;
    }
    return total;
  }
  protected readonly HTMLInputElement = HTMLInputElement;
  protected readonly Number = Number;
}
