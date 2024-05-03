import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import {Product} from '../../model/product.entity';
import {NgForOf} from "@angular/common";
import {ProductsService} from '../../services/products.service';
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDivider, MatButton, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() products: Array<Product> = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getAll().subscribe((data: any) => {
      this.products = data;
    });
  }
}
