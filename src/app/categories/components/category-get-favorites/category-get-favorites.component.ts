import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category.entity';
import { EventWearApiService } from '../../services/event-wear-api.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-category-get-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-get-favorites.component.html',
  styleUrl: './category-get-favorites.component.css'
})
export class CategoryGetFavoritesComponent implements OnInit {
 favoriteCategories: Category[] = [];

  constructor(private eventwearApiService: EventWearApiService) { }

  ngOnInit(): void {
    this.getFavoriteCategories();
  }

  getFavoriteCategories(): void {
    this.eventwearApiService.getFavoriteCategories().subscribe(
      (response: Category[]) => {
        this.favoriteCategories = response;
        console.log('Categorías favoritas obtenidas:', this.favoriteCategories);
      },
      (error: any) => {
        console.error('Error al obtener las categorías favoritas:', error);
      }
    );
  }
}
