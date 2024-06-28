import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.entity';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductRequest} from "../../model/product-request.entity";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {Router} from "@angular/router";

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
    private router: Router,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      cost: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  saveProduct(): void {
  if (this.productForm.valid) {
    const product: Product = this.productForm.value;
    this.authenticationService.currentUserId.subscribe(id => {
      product.lessorId = id;
    });
    if (product.publicationId) {
      console.log(product);
      this.productsService.updateProduct(product.publicationId, product).subscribe();
    } else {
      console.log(product);
      this.productsService.createProduct(product).subscribe();
      this.router.navigate(['/product-list']).then();

    }
  }
}
}
