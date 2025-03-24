import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { DateNagerModule } from './date-nager/date-nager.module';
import { ConfigModule } from '@nestjs/config';
import { CountriesNowModule } from './countries-now/countries-now.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      ignoreEnvFile: true,
      isGlobal: true, 
    }),
    CountryModule, 
    DateNagerModule, CountriesNowModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
