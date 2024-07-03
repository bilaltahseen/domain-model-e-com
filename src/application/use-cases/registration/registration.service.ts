import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/infrastructure/models/customer.model';
import { RegistrationDto } from './registration.dto';
import { Repository } from 'typeorm';
import { CustomerMapper } from 'src/domain/Customers/Customer.mapper';

@Injectable()
export class RegistrationService {
    constructor(
        @InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>
    ) { }

    async register(payload: RegistrationDto) {
       try {
        const entity = CustomerMapper.toEntity({ name: payload.name, email: payload.email, id: 0 });
        const savedEntity = await this.customerRepository.save(entity);
        return CustomerMapper.toDomain(savedEntity);
       } catch (error) {
        throw new HttpException(error.message, 400)
       }
    }

    async findByEmail(email: string) {
        const entity = await this.customerRepository.findOne({ where: { email } });
        if (!entity) {
            return null;
        }
        return CustomerMapper.toDomain(entity);
    }
}
