import { ProductEntity } from "src/infrastructure/models/Product.model";
import { Product } from "./Product.entity";
import { CustomerMapper } from "../Customers/Customer.mapper";

export class ProductMapper {
    static toDomain(productEntity: ProductEntity): Product {
       const product = Product.create({
              id: productEntity.id,
              seller: productEntity.seller,
              name: productEntity.name,
              price: productEntity.price,
              currency: productEntity.currency,
              sku: productEntity.sku
       })
         return product;
    }

    static toEntity(product: Product): ProductEntity {
      const productEntity = new ProductEntity();
        productEntity.id = product.id;
        productEntity.seller = CustomerMapper.toEntity(product.seller);
        productEntity.name = product.name;
        productEntity.price = product.price.amount;
        productEntity.currency = product.price.currency;
        productEntity.sku = product.sku.value;
        return productEntity;
    }

}