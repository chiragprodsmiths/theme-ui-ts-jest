import * as yup from 'yup';
import { FormData, BrandDetails, ServiceParameters, Margins, ServiceParametersValues } from './brands.add.types';
import * as ErrorMessages from './brands.add.validation.error.messages';

export const validationSchema = yup
  .object<FormData>({
    details: yup
      .object<BrandDetails>({
        name: yup.string().required(ErrorMessages.NameErrorMessages.REQUIRED),
        description: yup.string().nullable().nullable().defined(),
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
    serviceParameters: yup
      .object<ServiceParameters>({
        fleetManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .number()
              .transform((value) => (Number.isNaN(value) ? null : value))
              .nullable()
              .defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        maintenanceRepairs: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        tireManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        fuelManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        insurance: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        remarketing: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        damageManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        onlineReporting: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        breakdownAssist: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        replacementCar: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        warrantyExt: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        leasing: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
        smr: yup
          .object<ServiceParametersValues>({
            fmc: yup.number().nullable().defined(),
            partner: yup.number().nullable().defined(),
          })
          .defined(),
      })
      .defined(),
    margins: yup
      .object<Margins>({
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
  })
  .defined();
