import { Body, Controller, Post } from '@nestjs/common';
import { BuyService } from './buy.service';
import { CreateOrderDTO } from './buy.dto';
import { Order } from 'src/domain/Orders/Order.entity';

@Controller('buy')
export class BuyController {
    constructor(
        private readonly buyService: BuyService,
    ) {}

    @Post("create/order")
    async createOrder(@Body() payload: CreateOrderDTO): Promise<Order> {
        return await this.buyService.createOrder(payload);
    }
}
