import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIcon} from "@angular/material/icon";
import {ProductDetails} from "../../model/product-details.entity";
import {Characteristic} from "../../model/characteristic.entity";
import {Favorite} from "../../model/favorite.entity";
import {DetailApiService} from "../../services/detail-api.service";
import {FavoriteApiService} from "../../services/favorite-api.service";

import { NgClass } from "@angular/common";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIcon, NgClass, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  details: ProductDetails = new ProductDetails();
  favorites: Array<Favorite> = [];
  enFavoritos: boolean = false;
  textoFavorito: string = "Añadir a favoritos";

  constructor(private detailApiService: DetailApiService, private favoriteApiServie: FavoriteApiService) {
  }

  private getAllDetails(){
    this.detailApiService.getAll().subscribe((response) => {
      this.details = response;
      console.log(this.details);
    })

    this.favoriteApiServie.getAll().subscribe((response) =>{
      this.favorites = response;
      console.log(this.favorites);
    })
  }

  public favoriteButton(){
    this.enFavoritos = !this.enFavoritos;

    if(this.enFavoritos){
      this.textoFavorito = "En favoritos";
      this.favoriteApiServie.create(new Favorite(this.details.id));
    }else{
      this.favoriteApiServie.delete(this.details.id);
      this.textoFavorito = "Añadir a favoritos";
    }
  }

  ngOnInit() {
    this.getAllDetails();
  }

  protected readonly ProductDetails = ProductDetails;
  protected readonly Characteristic = Characteristic;
}
