import { IsArray, IsISO31661Alpha2, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class AddHolidaysDto {
    @IsISO31661Alpha2()
    countryCode: string

    @IsNumber()
    year: number

    @IsOptional()
    @IsArray()
    @IsString({each: true})
    holidays: string[]
}