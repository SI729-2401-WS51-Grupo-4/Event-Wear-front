import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Envio } from "../../model/envio.entity";
import { EnvioService } from "../../services/envio.service";
import { CommonModule } from '@angular/common';
//import { NgModule } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ShippingDetail } from '../../model/shippingDetail.entity';

@Component({
  selector: 'app-envios-lista',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './envios-lista.component.html',
  styleUrl: './envios-lista.component.css'
})
export class EnviosListaComponent {

 envios: Array<Envio>= [];
 details: Array<ShippingDetail> = [];

  constructor(private envioapi: EnvioService){

    }

ngOnInit(): void {
  this.envioapi.getAll().subscribe((response: any) => {
    this.envios = response;

    // Crear un array de observables para las solicitudes getDetailsById
    const detailsObservables = this.envios.map(envio => this.envioapi.getDetailsById(envio.id));

    // Hacer todas las solicitudes getDetailsById al mismo tiempo
    forkJoin(detailsObservables).subscribe((detailsArray: any[]) => {
      // Agregar los detalles a cada envío
      for (let i = 0; i < this.envios.length; i++) {
        this.envios[i].details = detailsArray[i];
      }

      console.log(this.envios);
    });
  });
}

}
