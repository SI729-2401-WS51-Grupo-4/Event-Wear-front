export class SignUpProfileRequest {
  public firstname: string;
  public lastName: string;
  public email: string;
  public number: string;
  public city: string;
  public postalCode: string;
  public country: string;

  constructor(firstname: string, lastName: string, email: string, number: string, city: string, postalCode: string, country: string) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.email = email;
    this.number = number;
    this.city = city;
    this.postalCode = postalCode;
    this.country = country;
  }
}
