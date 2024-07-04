import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.model";
import { CustomerEntity } from "./customer.model";

@Entity()
export class OrderEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => ProductEntity, product => product.orders, { cascade: true })
    @JoinTable()
    products: ProductEntity[];

    @Column()
    total: number;

    @ManyToOne(() => CustomerEntity, customer => customer.orders)
    customer: CustomerEntity;
}