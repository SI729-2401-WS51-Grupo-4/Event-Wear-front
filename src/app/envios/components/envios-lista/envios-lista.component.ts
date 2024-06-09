import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Envio } from "../../model/envio.entity";
import { EnvioService } from "../../services/envio.service";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-envios-lista',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule, RouterModule],
  templateUrl: './envios-lista.component.html',
  styleUrl: './envios-lista.component.css'
})
export class EnviosListaComponent {

 envios: Array<Envio>= [];

  constructor(private envioapi: EnvioService){

    }

   ngOnInit(): void {
        this.envioapi.getAll().subscribe((response: any) => {
          this.envios = response;
          console.log(this.envios);

        });

   }

}
