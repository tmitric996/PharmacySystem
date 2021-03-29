import { Medicine } from "./medicine";
import { User } from "./user";

export class Pharmacy {
    id: number;
    name: string;
    phone: string;
    address: string;
    description: string;
    medicines: Medicine[];
    dermatologists: User[];
    pharmacists: User[];
    priceForCounseling: number;

}
