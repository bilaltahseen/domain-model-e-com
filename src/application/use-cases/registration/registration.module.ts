import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/infrastructure/models/customer.model';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
