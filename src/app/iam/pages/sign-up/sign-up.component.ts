import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {ProfileService} from "../../services/profile.service";
import {SignUpProfileRequest} from "../../model/sign-up-profile.request";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatCardTitle,
    MatError,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService, private profileService: ProfileService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("entra");
    console.log(this.form);
    console.log(this.form.invalid);

    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    let firstname = this.form.value.firstname;
    let lastName = this.form.value.lastName;
    let email = this.form.value.email;
    let number = this.form.value.number;
    let city = this.form.value.city;
    let postalCode = this.form.value.postalCode;
    let country = this.form.value.country;
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest);
    const signUpProfileRequest = new SignUpProfileRequest(firstname, lastName, email, number, city, postalCode, country);
    this.profileService.createProfile(signUpProfileRequest);
    this.submitted = true;
  }
}
