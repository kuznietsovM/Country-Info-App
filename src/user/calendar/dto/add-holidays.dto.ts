import {
  IsArray,
  IsISO31661Alpha2,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddHolidaysDto {
  @IsISO31661Alpha2()
  countryCode: string;

  @IsNumber()
  year: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  holidays: string[];
}
