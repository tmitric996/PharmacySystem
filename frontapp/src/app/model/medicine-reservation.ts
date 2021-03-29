import { Medicine } from "./medicine";
import { Pharmacy } from "./pharmacy";
import { User } from "./user";

export class MedicineReservation {
    id: number;
    patient: User;
    dateAndTime: Date;
    pharmacy: Pharmacy;
    medicine: Medicine;
    taken: boolean;
}
