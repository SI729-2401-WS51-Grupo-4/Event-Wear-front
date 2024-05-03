import { Component } from '@angular/core';
import { PublicacionService } from "../../services/publicacion.service";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  publicaciones: Array<any> = [];


  constructor(private envioapi: PublicacionService){

    }

   ngOnInit(): void {
        this.envioapi.getAll().subscribe((response: any) => {
          this.publicaciones = response;
          console.log(this.publicaciones);

        });

   }

}


