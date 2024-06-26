import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventWearApiService } from '../../services/event-wear-api.service';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Category } from '../../model/category.entity';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-delete',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent {
deleteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventwearApiService: EventWearApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.deleteForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  deleteCategory() {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.id;
      this.eventwearApiService.deleteCategory(id).subscribe(
        response => {
          console.log('Categoría eliminada:', response);
          alert('La categoría se elimino correctamente.');
        },
        error => {
          console.error('Error al eliminar la categoría:', error);
          alert('Error al eliminar la categoría. Por favor, inténtelo de nuevo.');
        }
      );
    }
  }
}
