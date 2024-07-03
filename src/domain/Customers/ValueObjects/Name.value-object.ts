import { ValueObject } from "src/common/classes/ValueObject";

interface NameProps {
    value: string;
}

export class Name extends ValueObject<NameProps>{
    private constructor(props: NameProps) {
        super(props);
    }

    get value() {
        return this.props.value;
    }

    public static create(value: string): Name {
        if (value.length < 1 || value.length > 10) {
            throw new Error('Invalid name');
        }
        return new Name({ value });
    }
   
}