export class SignUpProfileRequest {
  public firstName: string;
  public lastName: string;
  public email: string;
  public street: string;
  public number: string;
  public city: string;
  public postalCode: string;
  public country: string;
  public userId: string;

  constructor(firstName: string, lastName: string, email: string, street: string,number: string, city: string, postalCode: string, country: string, userId: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.street = street;
    this.number = number;
    this.city = city;
    this.postalCode = postalCode;
    this.country = country;
    this.userId = userId;
  }
}
