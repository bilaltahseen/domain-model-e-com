import { OrderEntity } from "src/infrastructure/models/order.model";
import { Order } from "./Order.entity";
import { ProductMapper } from "../Products/Product.mapper";
import { CustomerMapper } from "../Customers/Customer.mapper";

export class OrderMapper {
    static toDomain(orderEntity: OrderEntity): Order {
        const order = Order.create({
            id: orderEntity.id,
            customer: CustomerMapper.toDomain(orderEntity.customer),
            products: orderEntity.products.map(product => ProductMapper.toDomain(product)),
            total: orderEntity.total
        })
        return order;
    }

    static toEntity(order: Order): OrderEntity {
        const orderEntity = new OrderEntity();
        orderEntity.id = order.id;
        orderEntity.customer = CustomerMapper.toEntity(order.customer);
        orderEntity.products = order.products.map(product => ProductMapper.toEntity(product));
        orderEntity.total = order.total.amount;
        return orderEntity;
    }
}