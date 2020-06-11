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
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        maintenanceRepairs: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        tireManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        fuelManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        insurance: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        remarketing: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        damageManagement: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        onlineReporting: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        breakdownAssist: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        replacementCar: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        warrantyExt: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        leasing: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
        smr: yup
          .object<ServiceParametersValues>({
            fmc: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
            partner: yup
              .string()
              .nullable()
              .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
                message: ErrorMessages.DecimalNumbersOnly.MATCH,
                excludeEmptyString: true,
              })
              .defined(),
          })
          .defined(),
      })
      .defined(),
    margins: yup
      .object<Margins>({
        smr: yup
          .string()
          .nullable()
          .matches(/^(100|[1-9]?[0-9])$/, {
            message: ErrorMessages.PercentageOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        smrDiscount: yup
          .string()
          .nullable()
          .matches(/^(100|[1-9]?[0-9])$/, {
            message: ErrorMessages.PercentageOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        insurance: yup
          .string()
          .nullable()
          .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
            message: ErrorMessages.DecimalNumbersOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        leasing: yup
          .string()
          .nullable()
          .matches(/^(100|[1-9]?[0-9])$/, {
            message: ErrorMessages.PercentageOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        tire: yup
          .string()
          .nullable()
          .matches(/^(100|[1-9]?[0-9])$/, {
            message: ErrorMessages.PercentageOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        tireDiscount: yup
          .string()
          .nullable()
          .matches(/^(100|[1-9]?[0-9])$/, {
            message: ErrorMessages.PercentageOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        fuel: yup
          .string()
          .nullable()
          .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
            message: ErrorMessages.DecimalNumbersOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
        km: yup
          .string()
          .nullable()
          .matches(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/, {
            message: ErrorMessages.DecimalNumbersOnly.MATCH,
            excludeEmptyString: true,
          })
          .defined(),
      })
      .defined(),
  })
  .defined();
