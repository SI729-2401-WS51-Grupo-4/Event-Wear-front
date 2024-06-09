import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-option',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './user-option.component.html',
  styleUrl: './user-option.component.css'
})
export class UserOptionComponent implements OnInit {
  currentUser: any;

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
