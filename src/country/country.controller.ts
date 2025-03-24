import { Controller, Get, Param } from '@nestjs/common';
import { DateNagerService } from 'src/date-nager/date-nager.service';
import { CountryCodeParamDto } from './dto/country-code-param.dto';
import { CountriesNowService } from 'src/countries-now/countries-now.service';

@Controller({
  version: ['1'],
  path: 'country',
})
export class CountryController {
  constructor(
    private dateNagerService: DateNagerService,
    private countriesNowService: CountriesNowService,
  ) {}

  @Get()
  async find() {
    return await this.dateNagerService.avaliableCountries();
  }

  @Get(':countryCode')
  async getByCode(@Param() params: CountryCodeParamDto) {
    const { borders, commonName } = await this.dateNagerService.countryInfo(
      params.countryCode,
    );
    const { populationCounts } =
      await this.countriesNowService.getCountryPopulationData(commonName);
    const { flag } = await this.countriesNowService.getCountryFlagUrl(
      params.countryCode,
    );

    return {
      borders,
      populationCounts,
      flag,
    };
  }
}
