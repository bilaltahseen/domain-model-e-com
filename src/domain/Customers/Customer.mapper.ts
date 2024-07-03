import { CustomerEntity } from "src/infrastructure/models/customer.model";
import { Customer } from "./Customer.entity";

export class CustomerMapper {
    static toDomain(customerEntity: CustomerEntity): Customer {
        const customer = Customer.create({
            id: customerEntity.id,
            email: customerEntity.email,
            name: customerEntity.name
        });
        return customer;
    }

    static toEntity(customer: Customer): CustomerEntity {
        const customerEntity = new CustomerEntity();
        customerEntity.id = customer.id;
        customerEntity.name = customer.name;
        customerEntity.email = customer.email;
        return customerEntity;
    }
}