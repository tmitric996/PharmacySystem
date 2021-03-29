import { Pharmacy } from "./pharmacy";
import { User } from "./user";

export class Complaint {
    id: number;
    patient: User;
    staff: User;
    pharmacy: Pharmacy;
    message: string;
    answered: boolean;
    asnwer: string;
}
