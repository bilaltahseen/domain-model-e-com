import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/infrastructure/models/order.model';
import { ProductEntity } from 'src/infrastructure/models/product.model';
import { In, Repository } from 'typeorm';
import { CreateOrderDTO } from './buy.dto';
import { ProductMapper } from 'src/domain/Products/Product.mapper';
import { Order } from 'src/domain/Orders/Order.entity';
import { OrderMapper } from 'src/domain/Orders/Order.mapper';
import { CustomerEntity } from 'src/infrastructure/models/customer.model';
import { CustomerMapper } from 'src/domain/Customers/Customer.mapper';

@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
        @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,
        @InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>,
    ) { }

    async createOrder(payload: CreateOrderDTO): Promise<Order> {

        const customer = await this.customerRepository.findOne({ where: { id: payload.customer } });
        
        if (!customer) {
            throw new Error('Customer not found');
        }

        const products = await this.productRepository.find({ where: { id: In(payload.products) },relations: ['seller'] });
        
        // Throw an error if any of the product ids are not found
        if (products.length !== payload.products.length) {
            throw new Error('One or more products not found');
        }

        const customerDomain = CustomerMapper.toDomain(customer);
        const productsDomain = products.map(product => ProductMapper.toDomain(product));
        const total = productsDomain.reduce((acc, product) => acc + product.price.amount, 0);
        try {
            const order = Order.create({products: productsDomain, total: total,customer: customerDomain});
            const orderEntity = OrderMapper.toEntity(order);
            console.log("🚀 ~ BuyService ~ createOrder ~ orderEntity:", orderEntity)
            const savedEntity = await this.orderRepository.save(orderEntity);
            return OrderMapper.toDomain(savedEntity);
        } catch (error) {
            console.log("🚀 ~ BuyService ~ createOrder ~ error:", error)
            throw new HttpException(error.message, 500);
        }
    }
}
