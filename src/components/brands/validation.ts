import * as yup from 'yup';
import { FormData, BrandDetails } from './types';
import * as ErrorMessages from './validation.error.messages';

export const validationSchema = yup
  .object<FormData>({
    details: yup
      .object<BrandDetails>({
        name: yup.string().required(ErrorMessages.NameErrorMessages.REQUIRED),
        description: yup.string().optional(),
        streetName: yup.string().required(ErrorMessages.StreetNameErrorMessages.REQUIRED),
        city: yup.object().required(ErrorMessages.CityErrorMessages.REQUIRED),
        zipCode: yup.string().required(ErrorMessages.ZipCodeErrorMessages.REQUIRED),
        country: yup.object().required(ErrorMessages.CountryErrorMessages.REQUIRED),
        language: yup.object().required(ErrorMessages.LanguageErrorMessages.REQUIRED),
        currency: yup.object().required(ErrorMessages.CurrencyErrorMessages.REQUIRED),
        timeZone: yup.object().required(ErrorMessages.TimeZoneErrorMessages.REQUIRED),
        units: yup.object().required(ErrorMessages.UnitsErrorMessages.REQUIRED),
        reportHeader: yup.string().optional(),
        reportFooter: yup.string().optional(),
        // brandLogo: yup.ref.optional
        brandColor: yup.string().optional(),
      })
      .defined(),
  })
  .defined();
