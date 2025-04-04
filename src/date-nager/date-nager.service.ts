import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AvaliableCountry } from './interfaces/avaliable-country.interface';
import { CountryInfo } from './interfaces/country-info.interface';
import { Holiday } from './interfaces/holiday.interface';

@Injectable()
export class DateNagerService {
  private origin: string;

  constructor(
    private httpService: HttpService,
    configService: ConfigService,
  ) {
    const host = configService.get<string>('DATE_NAGER_HOST', 'date.nager.at');
    const version = configService.get<string>('DATE_NAGER_VERSION', 'v3');
    this.origin = `https://${host}/api/${version}`;
  }

  async avaliableCountries(): Promise<AvaliableCountry[]> {
    try {
      const { data: countries } = await firstValueFrom(
        this.httpService.get<AvaliableCountry[]>(
          `${this.origin}/AvailableCountries`,
        ),
      );

      return countries;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async countryInfo(countryCode: string): Promise<CountryInfo> {
    try {
      const { data: info } = await firstValueFrom(
        this.httpService.get<CountryInfo>(
          `${this.origin}/CountryInfo/${countryCode}`,
        ),
      );

      return info;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async publicHolidays(
    year: number,
    countryCode: string,
    holidaysFilter?: string[],
  ) {
    try {
      let { data: holidays } = await firstValueFrom(
        this.httpService.get<Holiday[]>(
          `${this.origin}/PublicHolidays/${year}/${countryCode}`,
        ),
      );

      if (holidaysFilter && holidaysFilter.length > 0) {
        holidays = holidays.filter((holiday) =>
          holidaysFilter.includes(holiday.name),
        );
      }

      return holidays;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
