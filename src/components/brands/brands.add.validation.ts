import * as yup from 'yup';
import { CreateBrandParams } from './brands.add.types';
import * as ErrorMessages from './brands.add.validation.error.messages';
import { serviceParemetersValidation, marginsAndDiscountParametersValidation } from './brands.add.validation.common';

export const validationSchema = yup
  .object<CreateBrandParams>({
    name: yup.string().required(ErrorMessages.NameErrorMessages.REQUIRED),
    description: yup.string().nullable().defined(),
    streetNo: yup.string().nullable().defined(),
    streetName: yup.string().required(ErrorMessages.StreetNameErrorMessages.REQUIRED),
    city: yup.string().required(ErrorMessages.CityErrorMessages.REQUIRED),
    zipcode: yup.string().required(ErrorMessages.ZipCodeErrorMessages.REQUIRED),
    country: yup.string().required(ErrorMessages.CountryErrorMessages.REQUIRED),
    language: yup.string().required(ErrorMessages.LanguageErrorMessages.REQUIRED),
    currency: yup.string().required(ErrorMessages.CurrencyErrorMessages.REQUIRED),
    timezone: yup.string().required(ErrorMessages.TimeZoneErrorMessages.REQUIRED),
    units: yup.string().required(ErrorMessages.UnitsErrorMessages.REQUIRED),
    reportsHeaders: yup.string().nullable().defined(),
    reportsFooter: yup.string().nullable().defined(),
    logo: yup.string().nullable().defined(),
    brandPrimaryColor: yup.string().nullable().defined(),
    fmcServiceParameters: serviceParemetersValidation,
    partnerServiceParameters: serviceParemetersValidation,
    marginAndDiscountsParams: marginsAndDiscountParametersValidation,
    fmcId: yup.string().required(),
  })
  .defined();
