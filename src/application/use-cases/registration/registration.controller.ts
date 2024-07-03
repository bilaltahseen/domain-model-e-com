import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from './registration.dto';

@Controller('registration')
export class RegistrationController {
    constructor(
        private registrationService: RegistrationService
    ) { }

    @Post()
    async register(@Body() payload: RegistrationDto) {
        return this.registrationService.register(payload);
    }

    @Get()
    async findByEmail(@Query('email') email: string){
        return this.registrationService.findByEmail(email);
    }
}
