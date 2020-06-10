import * as yup from 'yup';
import { FormData, BrandDetails, ServiceParameters, Margins, ServiceParametersValues } from './types';
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
    serviceParameters: yup
      .object<ServiceParameters>({
        fleetManagement: yup.object<ServiceParametersValues>({
          fmc: yup.number().notRequired().positive(),
          partner: yup.number().optional(),
        }),
        maintenanceRepairs: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        tireManagement: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        fuelManagement: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        insurance: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        reMarketing: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        onlineReporting: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        breakdownAssist: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        replacementCar: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        warrantyExt: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        leasing: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
        smr: yup.object<ServiceParametersValues>({
          fmc: yup.number().positive().optional(),
          partner: yup.number().positive().optional(),
        }),
      })
      .defined(),
    margins: yup.object<Margins>({
      smr: yup.number().positive().optional(),
      smrDiscount: yup.number().positive().optional(),
      insurance: yup.number().positive().optional(),
      leasing: yup.number().positive().optional(),
      tire: yup.number().positive().optional(),
      tireDiscount: yup.number().positive().optional(),
      fuel: yup.number().positive().optional(),
      km: yup.number().positive().optional(),
    }),
  })
  .defined();
