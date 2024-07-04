import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.model";
import { CustomerEntity } from "./customer.model";

@Entity()
export class ProductEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    currency: string;

    @Column()
    sku: string;

    @ManyToMany(() => OrderEntity, orders => orders.products)
    orders: OrderEntity[];

    @ManyToOne(() => CustomerEntity, customer => customer.products)
    seller: CustomerEntity;
}