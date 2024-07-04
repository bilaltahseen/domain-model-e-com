import { Money } from "../../common/ValueObjects/Money.value-object";
import { Customer } from "../Customers/Customer.entity";
import { Sku } from "./ValueObjects/Sku.value-object";

interface ProductProps {
    id?: number;
    seller: Customer;
    name: string;
    price: number;
    currency: string;
    sku: string;
}

export class Product {
    
    public readonly id: number;
    public readonly seller: Customer;
    public readonly name: string;
    public readonly price: Money;
    public readonly sku: Sku;

    private constructor(props: ProductProps) {
        this.id = props.id;
        this.name = props.name;
        this.seller = props.seller;
        this.price = Money.create(props.price, props.currency);
        this.sku = Sku.create(props.sku);
    }

    public static create(props: ProductProps): Product {
        return new Product(props);
    }

}





