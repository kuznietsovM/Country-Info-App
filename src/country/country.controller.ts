import { Controller, Get } from '@nestjs/common';
import { DateNagerService } from 'src/date-nager/date-nager.service';

@Controller({
    version: ['1'],
    path: 'country'
})
export class CountryController {

    constructor(private dateNagerService: DateNagerService) {}

    @Get()
    async find() {
        return await this.dateNagerService.avaliableCountries()
    }
}
