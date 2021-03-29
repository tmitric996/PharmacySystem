export class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    homeAddress: string;
    city: string;
    state: string;
    phoneNumber: string;
    enabled: Boolean;
    lastPasswordResetDate: Date;
    authorities: string;
}
