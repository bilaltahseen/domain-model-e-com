import { Email } from "./ValueObjects/Email.value-object";
import { Name } from "./ValueObjects/Name.value-object";

interface CustomerProps {
    id?: number;
    email: string;
    name: string;
}

export class Customer {

    public id: number = 0;
    public email: string = "";
    public name: string = "";

    constructor(props: CustomerProps) {
        this.id = props.id;
        this.email = Email.create(props.email).value;
        this.name = Name.create(props.name).value;
    }

    public static create(props: CustomerProps): Customer {
        return new Customer(props);
    }

}