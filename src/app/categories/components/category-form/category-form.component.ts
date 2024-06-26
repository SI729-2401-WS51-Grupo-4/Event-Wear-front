import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../model/category.entity';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { EventWearApiService } from '../../services/event-wear-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({}); // Initialize productForm
  imageUrl: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private eventwearApiService: EventWearApiService,
    private router: Router // Importar e inyectar el Router

  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      category_name: ['', Validators.required],
      category_type: ['', Validators.required],
      price_range: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required],
      image2: ['', Validators.required],
      isFavorite:[false],
    });
  }

  updateImageUrl(): void {
    this.imageUrl = this.categoryForm.get('image2')?.value;
  }
  saveCategory(): void {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value;
      console.log(category); // Solo para propósitos de depuración

      this.eventwearApiService.createCategory(category).subscribe(
        response => {
          console.log('Categoría Creada:', response);
          alert('La categoría se creó correctamente.');
        },
        error => {
          console.error('Error al crear la categoría:', error);
        }
      );
    }
  }

}
