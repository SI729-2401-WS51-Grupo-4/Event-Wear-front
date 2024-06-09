import { Component, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {Product} from "../../model/product.entity";
import { EventWearApiService } from '../../services/event-wear-api.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  animations: [
      trigger('detailExpand', [
        state('collapsed,void', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ]),
    ],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, CommonModule,MatIconModule,MatPaginatorModule,MatPaginator,RouterModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  displayedColumns: string[] = ['Categorias existentes'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: Product | null = null;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
    constructor(private eventwearApiService: EventWearApiService) {

    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

     ngOnInit(): void {
       this.eventwearApiService.getProducts().subscribe((data: any) => {
         this.products = data;
         this.dataSource = new MatTableDataSource(this.products);
         this.dataSource.paginator = this.paginator; // Asignar el paginador
         console.log(this.dataSource);
       });

     }

}









/*
    ngOnInit(): void {
      this.eventwearApiService.getProducts().subscribe((data: any) => {
        this.products = data;
        this.dataSource = new MatTableDataSource(this.products);
        console.log(this.dataSource);
      });
    }
*/
