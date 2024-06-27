export class Transaction {
  Id: number;
  userId: number;
  lessorId: number;
  amount: number;
  date: Date;
  paymentMethod: string;
  paymentDetails: string;
  rents: Array<number>;

  constructor() {
    this.Id = 0;
    this.userId = 0;
    this.lessorId = 0;
    this.amount = 0;
    this.date = new Date();
    this.paymentMethod = "";
    this.paymentDetails = "";
    this.rents = [];
  }
}
