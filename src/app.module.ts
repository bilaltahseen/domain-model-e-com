import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './application/use-cases/registration/registration.module';
import { ConfigModule } from '@nestjs/config';
import dataSource from './infrastructure/database/data-source';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV || 'development'}`,
    load: [dataSource],
  }),
  DatabaseModule,RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
