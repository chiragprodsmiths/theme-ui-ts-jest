export type FormData = {
  name: string;
  description?: string;
  street_no?: string;
  street_name: string;
  city: string;
  zip_code: string;
  country: string;
  language: string;
  currency: string;
  time_zone: string;
  units: string;
  reports_header?: string;
  reports_footer?: string;
  reports_primary_color?: string;
  logo?: string;
};

export type ManageUsersResponse = {
  details: {
    name: string;
    description: string;
    street_no: string;
    street_name: string;
    city: string;
    zip_code: string;
    country: string;
    language: string;
    currency: string;
    time_zone: string;
    units: string;
    reports_header: string;
    reports_footer: string;
    reports_primary_color: string;
    logo: string;
  };
};

export enum NameErrorMessages {
  REQUIRED = 'Please enter name',
}

export enum StreetNameErrorMessages {
  REQUIRED = 'Please enter street name',
}

export enum CityErrorMessages {
  REQUIRED = 'Please enter city',
}

export enum ZipCodeErrorMessages {
  REQUIRED = 'Please enter zip code',
}

export enum CountryErrorMessages {
  REQUIRED = 'Please Select country',
}

export enum LanguageErrorMessages {
  REQUIRED = 'Please Select language',
}

export enum CurrencyErrorMessages {
  REQUIRED = 'Please Select currency',
}

export enum TimeZoneErrorMessages {
  REQUIRED = 'Please Select timezone',
}

export enum UnitsErrorMessages {
  REQUIRED = 'Please Select units',
}
