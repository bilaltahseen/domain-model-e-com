import { Module } from '@nestjs/common';
import { SellController } from './sell.controller';
import { SellService } from './sell.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/infrastructure/models/product.model';
import { CustomerEntity } from 'src/infrastructure/models/customer.model';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,CustomerEntity])],
  controllers: [SellController],
  providers: [SellService]
})
export class SellModule {}
