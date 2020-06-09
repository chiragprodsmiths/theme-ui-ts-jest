import * as yup from 'yup';
import {
  FormData,
  NameErrorMessages,
  StreetNameErrorMessages,
  CityErrorMessages,
  ZipCodeErrorMessages,
  CountryErrorMessages,
  LanguageErrorMessages,
  CurrencyErrorMessages,
  TimeZoneErrorMessages,
  UnitsErrorMessages,
} from './types';

export const validationSchema = yup
  .object<FormData>({
    name: yup.string().required(NameErrorMessages.REQUIRED),
    street_name: yup.string().required(StreetNameErrorMessages.REQUIRED),
    city: yup.string().required(CityErrorMessages.REQUIRED),
    zip_code: yup.string().required(ZipCodeErrorMessages.REQUIRED),
    country: yup.string().required(CountryErrorMessages.REQUIRED),
    language: yup.string().required(LanguageErrorMessages.REQUIRED),
    currency: yup.string().required(CurrencyErrorMessages.REQUIRED),
    time_zone: yup.string().required(TimeZoneErrorMessages.REQUIRED),
    units: yup.string().required(UnitsErrorMessages.REQUIRED),
  })
  .defined();
