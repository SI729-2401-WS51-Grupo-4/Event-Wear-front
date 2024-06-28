import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

import { RouterModule } from '@angular/router';
import {ProductsService} from "../../../products/services/products.service";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  publicaciones: Array<any> = [];
  currentUser: any;

  constructor(private envioapi: ProductsService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.envioapi.getProducts().subscribe((response: any) => {
      this.publicaciones = response;
      console.log(this.publicaciones);
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
