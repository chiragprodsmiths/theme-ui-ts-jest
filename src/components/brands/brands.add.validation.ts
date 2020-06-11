import * as yup from 'yup';
import { CreateBrandParams, ServiceParametersParams, MarginAndDiscountsParams } from './brands.add.types';
import * as ErrorMessages from './brands.add.validation.error.messages';

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
    fmcServiceParameters: yup
      .object<ServiceParametersParams>({
        fleetManagement: yup
          .number()
          .transform((value) => (Number.isNaN(value) ? null : value))
          .test('isDecimal', ErrorMessages.ServiceParametersMessage.DECIMAL, (value) => {
            if (value && value !== null) {
              return new RegExp(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/).test(value);
            }
            return true;
          })
          .nullable()
          .defined(),
        maintenanceRepairs: yup.number().nullable().defined(),
        tireManagement: yup.number().nullable().defined(),
        fuelManagement: yup.number().nullable().defined(),
        insurance: yup.number().nullable().defined(),
        damageManagement: yup.number().nullable().defined(),
        remarketing: yup.number().nullable().defined(),
        onlineReporting: yup.number().nullable().defined(),
        breakdownAssistance: yup.number().nullable().defined(),
        carReplacement: yup.number().nullable().defined(),
        warrantyExtension: yup.number().nullable().defined(),
        leasing: yup.number().nullable().defined(),
        smr: yup.number().nullable().defined(),
      })
      .defined(),
    partnerServiceParameters: yup
      .object<ServiceParametersParams>({
        fleetManagement: yup
          .number()
          .transform((value) => (Number.isNaN(value) ? null : value))
          .test('isDecimal', ErrorMessages.ServiceParametersMessage.DECIMAL, (value) => {
            if (value && value !== null) {
              return new RegExp(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/).test(value);
            }
            return true;
          })
          .nullable()
          .defined(),
        maintenanceRepairs: yup.number().nullable().defined(),
        tireManagement: yup.number().nullable().defined(),
        fuelManagement: yup.number().nullable().defined(),
        insurance: yup.number().nullable().defined(),
        damageManagement: yup.number().nullable().defined(),
        remarketing: yup.number().nullable().defined(),
        onlineReporting: yup.number().nullable().defined(),
        breakdownAssistance: yup.number().nullable().defined(),
        carReplacement: yup.number().nullable().defined(),
        warrantyExtension: yup.number().nullable().defined(),
        leasing: yup.number().nullable().defined(),
        smr: yup.number().nullable().defined(),
      })
      .defined(),
    marginAndDiscountsParams: yup
      .object<MarginAndDiscountsParams>({
        smr: yup.number().nullable().defined(),
        smrDiscount: yup.number().nullable().defined(),
        insurance: yup.number().nullable().defined(),
        leasing: yup.number().nullable().defined(),
        tire: yup.number().nullable().defined(),
        tireDiscount: yup.number().nullable().defined(),
        fuel: yup.number().nullable().defined(),
        km: yup.number().nullable().defined(),
      })
      .defined(),
    fmcId: yup.string().required(),
  })
  .defined();
