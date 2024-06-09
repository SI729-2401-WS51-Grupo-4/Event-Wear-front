import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransactionsApiService } from "../../services/transactions-api.service";
import {Purchase} from "../../model/purchase.entity";
import { NgClass } from "@angular/common";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule, NgClass, CommonModule, MatButtonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent implements OnInit {

  purchases: Array<Purchase> =[];

  constructor(private transactionApiService: TransactionsApiService) {

  }

  private DeleteItem(itemId: number){
    this.transactionApiService.delete(itemId);
    this.getAllItems();
  }

  private getAllItems(){
    this.transactionApiService.getAll().subscribe((response: any) =>{
      this.purchases = response;
      console.log(this.purchases);
    })
  }

  onDeleteItem(element: Purchase){
    this.DeleteItem(element.id);
  }

  ngOnInit(): void {
    this.getAllItems();
  }
}
