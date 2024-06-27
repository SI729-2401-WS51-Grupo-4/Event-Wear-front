import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { EnvioService } from '../../services/envio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.css',

})
export class ShippingFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private envioService: EnvioService) {
    this.form = this.fb.group({
      address: ['', Validators.required],
      deadline: ['', Validators.required],
      rentId: ['', Validators.required],
      shippingDetails: this.fb.array([this.createDetail()])


    });
  }
  get details(): FormArray {
    return this.form.get('shippingDetails') as FormArray;
  }

    createDetail(): FormGroup {
      return this.fb.group({
        description: ['', Validators.required],
        importancelevel: ['', Validators.required]
      });
    }

  addDetail(): void {
    this.details.push(this.createDetail());
  }

  ngOnInit(): void {
  }

  removeDetail(i: number) {
    this.details.removeAt(i);
  }

  submit(): void {
    if (this.form.valid) {
      this.envioService.created(this.form.value).subscribe({
        next: response => console.log('Envío creado', response),
        error: err => console.log('Error al crear el envío', err)
      });
    }
  }

}
