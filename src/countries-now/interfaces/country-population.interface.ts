export interface CountryPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCounts: {
    year: number;
    value: number;
  }[];
}
