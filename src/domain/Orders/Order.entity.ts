import { Money } from "src/common/ValueObjects/Money.value-object";
import { Product } from "../Products/Product.entity";
import { Customer } from "../Customers/Customer.entity";

interface OrderProps {
    id?: number;
    customer: Customer;
    products: Product[];
    total: number;
}

export class Order {
    id: number;
    customer: Customer;
    products: Product[];
    total: Money;

    private constructor(props: OrderProps) {
        this.id = props.id;
        this.customer = props.customer;
        this.products = props.products;
        this.total = Money.create(props.total, "USD");
    }

    public static create(props: OrderProps): Order {
        return new Order(props);
    }
}