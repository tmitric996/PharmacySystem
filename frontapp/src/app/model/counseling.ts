import { Pharmacy } from "./pharmacy";
import { User } from "./user";

export class Counseling {
    id: number;
    dateAndTime: Date;
    pharmacist: User;
    patient: User;
    pharmacy: Pharmacy;
    report: string;
    executed: boolean;
    didtnShow: boolean;
}
