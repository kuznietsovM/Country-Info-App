import { IsISO31661Alpha2 } from 'class-validator';

export class CountryCodeParamDto {
  @IsISO31661Alpha2()
  countryCode: string;
}
