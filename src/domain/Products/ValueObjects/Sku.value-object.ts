import { ValueObject } from "src/common/classes/ValueObject";

interface SkuProps {
    value: string;
}

export class Sku extends ValueObject<SkuProps>{
    private constructor(props: SkuProps) {
        super(props);
    }

    get value() {
        return this.props.value;
    }

    public static create(value: string): Sku {
        if (value.length < 1 || value.length > 10) {
            throw new Error('Invalid SKU');
        }
        return new Sku({ value });
    }
}