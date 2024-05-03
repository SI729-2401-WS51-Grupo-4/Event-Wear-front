import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.entity';
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  saveProduct(): void {
    this.submitted = true;
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      if (product.id) {
        console.log(product);
        this.productsService.update(product.id, product).subscribe();
      } else {
        console.log(product);
        this.productsService.create(product).subscribe();
        this.router.navigate(['/product-list']);
      }
    }
  }
}
