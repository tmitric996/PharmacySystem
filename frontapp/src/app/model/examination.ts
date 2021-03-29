import { Pharmacy } from "./pharmacy";
import { User } from "./user";

export class Examination {
    id: number;
    price: number;
    dateAndTime: Date;
    dermatologist: User;
    patient: User;
    pharmacy: Pharmacy;
    executed: boolean;
    didntShow: boolean;
    report: string;
}
