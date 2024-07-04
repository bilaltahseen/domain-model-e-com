import { Module } from '@nestjs/common';
import { BuyService } from './buy.service';
import { BuyController } from './buy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/infrastructure/models/product.model';
import { OrderEntity } from 'src/infrastructure/models/order.model';
import { CustomerEntity } from 'src/infrastructure/models/customer.model';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, OrderEntity,CustomerEntity])],
  providers: [BuyService],
  controllers: [BuyController]
})
export class BuyModule {}
