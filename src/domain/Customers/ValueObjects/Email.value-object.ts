import { ValueObject } from "src/common/classes/ValueObject";

interface EmailProps {
    value: string;
}

export class Email extends ValueObject<EmailProps>{
    private constructor(props: EmailProps) {
        super(props);
    }

    get value() {
        return this.props.value;
    }

    public static create(value: string): Email {
        if (!value.includes('@')) {
            throw new Error('Invalid email');
        }
        return new Email({ value });
    }
}