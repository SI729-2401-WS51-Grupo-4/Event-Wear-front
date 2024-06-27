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
  // cart-list.component.ts
updateQuantity(itemId: number, quantity: number): void {
  this.cartService.updateQuantity(itemId, quantity).subscribe((updatedItem: Cart) => {
    // Actualiza la cantidad del producto en el carrito
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity = updatedItem.quantity;
    }
  });
}

calculateTotal() {
  let total = 0;
  for (const item of this.cartItems) {
    // Asegúrate de que la cantidad siempre sea un número
    const quantity = Number(item.quantity) || 0;
    total += item.price * quantity;
  }
  return total;
}

removeFromCart(itemId: number): void {
  const item = this.cartItems.find(item => item.id === itemId);
  if (item) {
    if (item.quantity > 1) {
      // Si la cantidad del producto es mayor que 1, disminuye la cantidad
      this.updateQuantity(itemId, item.quantity - 1);
    } else {
      // Si la cantidad del producto es 1, elimina el producto del carrito
      this.cartService.removeFromCart(itemId).subscribe(() => {
        this.getCartItems();
      });
    }
  }
}
  protected readonly HTMLInputElement = HTMLInputElement;
  protected readonly Number = Number;
}
