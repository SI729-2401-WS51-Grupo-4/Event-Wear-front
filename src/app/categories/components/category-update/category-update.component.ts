import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventWearApiService } from '../../services/event-wear-api.service';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Category } from '../../model/category.entity';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit {
updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private eventwearApiService: EventWearApiService
  ) {
    this.updateForm = this.formBuilder.group({
      id: ['', Validators.required],
      category_name: ['', Validators.required],
      category_type: ['', Validators.required],
      price_range: ['', Validators.required],
      description: [''],
      rate: [''],
      image2: [''],
      isFavorite: [false]
    });
  }

  ngOnInit(): void {
  }

  updateCategory(): void {
    if (this.updateForm.valid) {
      const categoryData = this.updateForm.value;
      this.eventwearApiService.updateCategory(categoryData.id, categoryData).subscribe(
        response => {
          console.log('Categoría actualizada:', response);
          alert('La categoría se actualizó correctamente.');
        },
        error => {
          console.error('Error al actualizar la categoría:', error);
          alert('Error al actualizar la categoría. Por favor, inténtelo de nuevo.');
        }
      );
    } else {
      // Mostrar mensaje de validación
      alert('Por favor complete el formulario correctamente.');
    }
  }
}
