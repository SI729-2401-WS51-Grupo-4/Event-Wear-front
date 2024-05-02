import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.entity';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({}); // Initialize productForm

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      if (product.id) {
        console.log(product);
        this.productsService.updateProduct(product.id, product).subscribe();
      } else {
        console.log(product);
        this.productsService.createProduct(product).subscribe();
      }
    }
  }
}
