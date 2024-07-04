import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SellService } from './sell.service';
import { SellProductDTO } from './sell.dto';
import { Product } from 'src/domain/Products/Product.entity';

@Controller('sell')
export class SellController {
    constructor(
        private readonly sellService: SellService,
    ) {}

    @Post()
    async sellProduct(@Body() payload: SellProductDTO): Promise<Product> {
        return await this.sellService.sellProduct(payload);
    }

    @Get(':id')
    async findProductById(@Param('id') id: number): Promise<Product> {
        return this.sellService.findProductById(id);
    }
}
