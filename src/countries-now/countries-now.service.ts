import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CountryPopulation } from './interfaces/country-population.interface';
import { CountriesNowResponse } from './interfaces/countries-now-response.interface';
import { CountryFlag } from './interfaces/country-flag.interface';

@Injectable()
export class CountriesNowService {
  private origin: string;

  constructor(
    private httpService: HttpService,
    configService: ConfigService,
  ) {
    const host = configService.get<string>(
      'COUNTRIES_NOW_HOST',
      'countriesnow.space',
    );
    const version = configService.get<string>('COUNTRIES_NOW_VERSION', 'v0.1');
    this.origin = `https://${host}/api/${version}`;
  }

  async getCountryPopulationData(
    countryName: string,
  ): Promise<CountryPopulation> {
    try {
      const { data: response } = await firstValueFrom(
        this.httpService.post<CountriesNowResponse<CountryPopulation>>(
          `${this.origin}/countries/population`,
          {
            country: countryName,
          },
        ),
      );

      if (response.error) throw new InternalServerErrorException(response.msg);

      return response.data;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async getCountryFlagUrl(countryCode: string) {
    try {
      const { data: response } = await firstValueFrom(
        this.httpService.post<CountriesNowResponse<CountryFlag>>(
          `${this.origin}/countries/flag/images`,
          {
            iso2: countryCode,
          },
        ),
      );

      if (response.error) throw new InternalServerErrorException(response.msg);

      return response.data;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
