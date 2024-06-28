import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import {Product} from '../../model/product.entity';
import {NgForOf} from "@angular/common";
import {ProductsService} from '../../services/products.service';
import {MatDivider} from "@angular/material/divider";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductDetail} from "../../model/product-detail.entity";
import {MatIcon} from "@angular/material/icon";

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDivider, MatButton, RouterLink, ReactiveFormsModule, MatIcon, MatIconButton, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() products: Array<Product> = [];
  filteredProducts: Array<Product> = [];
  cartItemCount: number = 0;
  constructor(private productsService: ProductsService, private router: Router) {}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
  }
  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(filterValue) || product.description.toLowerCase().includes(filterValue)
    );
  }
  // Función manejadora de eventos para el botón

  cartItems: any[] = []; // Lista de productos en el carrito

  addToCart(product: any): void {
    console.log(product);
  this.productsService.addToCart(product).subscribe(() => {
    console.log('Producto agregado al carrito:', product);
    this.cartItemCount++;
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
