import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './application/use-cases/registration/registration.module';
import { ConfigModule } from '@nestjs/config';
import dataSource from './infrastructure/database/data-source';
import { DatabaseModule } from './infrastructure/database/database.module';
import { SellModule } from './application/use-cases/sell/sell.module';
import { BuyModule } from './application/use-cases/buy/buy.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV || 'development'}`,
    load: [dataSource],
  }),
  DatabaseModule,RegistrationModule, SellModule, BuyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
