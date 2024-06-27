import {ShippingDetail} from './shippingDetail.entity';

export class Envio {

    id: number;
    address: string;
    deadline: string;
    rentId: number;
    startdate: string;
    remainingDaysValue: number;
    trackingstatus: string;
    details: Array<ShippingDetail>;

    constructor() {
        this.id = 0;
        this.address = " ";
        this.deadline = " ";
        this.rentId = 0;
        this.remainingDaysValue = 0;
        this.startdate = " ";
        this.trackingstatus = " ";
        this.details = [new ShippingDetail()];

        }

}
