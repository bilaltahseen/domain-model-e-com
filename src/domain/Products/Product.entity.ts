import { Money } from "./ValueObjects/Money.value-object";
import { Sku } from "./ValueObjects/Sku.value-object";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    curreny: string;
    sku: string;
}

export class Product {
    
    public readonly id: number;
    public readonly name: string;
    public readonly price: Money;
    public readonly sku: Sku;

    private constructor(props: ProductProps) {
        this.id = props.id;
        this.name = props.name;
        this.price = Money.create(props.price, props.curreny);
        this.sku = Sku.create(props.sku);
    }

    public static create(props: ProductProps): Product {
        return new Product(props);
    }

}





