import { Column, Entity, OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.model";
import { OrderEntity } from "./order.model";

@Entity()
export class CustomerEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => ProductEntity, product => product.seller)
    products: ProductEntity[];

    @OneToMany(() => OrderEntity, order => order.customer)
    orders: OrderEntity;
}