import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/infrastructure/models/product.model';
import { Repository } from 'typeorm';
import { SellProductDTO } from './sell.dto';
import { CustomerEntity } from 'src/infrastructure/models/customer.model';
import { Product } from 'src/domain/Products/Product.entity';
import { ProductMapper } from 'src/domain/Products/Product.mapper';

@Injectable()
export class SellService {
    constructor(
        @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
        @InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>,
    ) { }

    async sellProduct(payload: SellProductDTO): Promise<Product> {

        const customer = await this.customerRepository.findOne({ where: { id: payload.seller } });

        if (!customer) {
            throw new Error('Seller not found');
        }
        const product = Product.create({ name: payload.name, price: payload.price, currency: payload.currency, sku: payload.sku, seller: customer });
        const productEntity = ProductMapper.toEntity(product);
        const savedEntity = await this.productRepository.save(productEntity);
        return ProductMapper.toDomain(savedEntity);
    }

    async findProductById(id: number): Promise<Product> {
        const entity = await this.productRepository.findOne({ where: { id } });
        if (!entity) {
            throw new Error('Product not found');
        }
        return ProductMapper.toDomain(entity);
    }
}
