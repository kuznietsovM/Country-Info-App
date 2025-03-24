import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { DateNagerModule } from './date-nager/date-nager.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      ignoreEnvFile: true,
      isGlobal: true, 
    }),
    CountryModule, 
    DateNagerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
