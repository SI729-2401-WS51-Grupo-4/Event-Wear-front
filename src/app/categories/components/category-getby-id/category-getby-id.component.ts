import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventWearApiService } from '../../services/event-wear-api.service';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Category } from '../../model/category.entity';

@Component({
  selector: 'app-category-getby-id',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category-getby-id.component.html',
  styleUrl: './category-getby-id.component.css'
})
export class CategoryGetbyIdComponent implements OnInit {
  getByIdForm: FormGroup;
  category: Category | undefined;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private eventwearApiService: EventWearApiService // Asegúrate de tener esto bien importado y registrado
  ) {
    this.getByIdForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getCategoryById(): void {
    if (this.getByIdForm.valid) {
      const id = this.getByIdForm.value.id;
      this.eventwearApiService.getCategoryById(id).subscribe(
        (response: Category) => {
          this.category = response;
          console.log('Categoría obtenida:', this.category);
          this.errorMessage = undefined; // Reinicia el mensaje de error si se encontró la categoría
        },
        (error: any) => {
          console.error('Error al obtener la categoría por ID:', error);
          this.category = undefined; // Limpia la categoría si hay un error
          this.errorMessage = 'No se encontró la categoría'; // Establece el mensaje de error
        }
      );
    }
  }

}
