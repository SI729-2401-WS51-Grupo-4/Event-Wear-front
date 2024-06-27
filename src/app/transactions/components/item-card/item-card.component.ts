import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransactionsApiService } from "../../services/transactions-api.service";
import { NgClass } from "@angular/common";
import { CommonModule } from '@angular/common'
import {Transaction} from "../../model/transaction.entity";

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule, NgClass, CommonModule, MatButtonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent implements OnInit {

  transactions: Array<Transaction> = [];

  constructor(private transactionApiService: TransactionsApiService) {

  }

  private DeleteItem(rentId: number){
    this.transactionApiService.delete(rentId);
    this.getAllItems();
  }

  private getAllItems(){
    this.transactionApiService.getAll().subscribe((response: any) =>{
      this.transactions = response;
      console.log(this.transactions);
    })
  }

  onDeleteItem(element: Transaction){
    this.DeleteItem(element.Id);
  }

  ngOnInit(): void {
    this.getAllItems();
  }
}
