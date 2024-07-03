import { ValueObject } from "src/common/classes/ValueObject";

interface MoneyProps {
    amount: number;
    currency: string;
}

export class Money extends ValueObject<MoneyProps>{
    
    private constructor(props: MoneyProps) {
        super(props);
    }

    get amount() {
        return this.props.amount;
    }

    get currency() {
        return this.props.currency;
    }

    public static create(amount: number, currency: string): Money {
        return new Money({ amount, currency });
    }
}
