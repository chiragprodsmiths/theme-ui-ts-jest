import * as yup from 'yup';
import { ServiceParametersParams, MarginAndDiscountsParams } from './brands.add.types';
import * as ErrorMessages from './brands.add.validation.error.messages';

const allowNull: yup.NumberSchema<number | null> = yup
  .number()
  .transform((value) => (Number.isNaN(value) ? null : value))
  .nullable()
  .defined();

const onlyNumberAllowed: yup.NumberSchema<number | null> = yup
  .number()
  .typeError(ErrorMessages.ServiceParametersMessage.DECIMAL)
  .nullable()
  .defined();

const onlyDecimalAllowed: yup.MixedSchema<{} | null> = yup
  .mixed()
  .test('onlyDecimalAllowed', ErrorMessages.ServiceParametersMessage.DECIMAL, (value) => {
    if (value && value !== null) {
      const isValid = new RegExp(/^[0-9]+([.,][0-9]{1,2})?$/).test(value.toString());
      return isValid;
    }
    return true;
  })
  .nullable()
  .defined();

export const OptionalTwoDecimalNumbers: yup.Lazy = yup.lazy((originalValue) => {
  if (typeof originalValue === 'string' && originalValue === '') {
    return allowNull;
  }
  if (Number.isNaN(Number(originalValue))) {
    return onlyNumberAllowed;
  }
  return onlyDecimalAllowed;
});

const onlyPercentageAllowed: yup.NumberSchema<number | null> = yup
  .number()
  .min(0, ErrorMessages.MarginsAndDiscountsParametersMessage.PERCENTAGE)
  .max(100, ErrorMessages.MarginsAndDiscountsParametersMessage.PERCENTAGE)
  .nullable()
  .defined();

export const OptionalPercentage: yup.Lazy = yup.lazy((originalValue) => {
  if (typeof originalValue === 'string' && originalValue === '') {
    return allowNull;
  }
  if (Number.isNaN(Number(originalValue))) {
    return onlyNumberAllowed;
  }
  if (!Number.isNaN(Number(originalValue))) {
    const number = Number(originalValue);
    if (number < 0 || number > 100) {
      return onlyPercentageAllowed;
    }
  }
  return onlyDecimalAllowed;
});

export const serviceParameterValidation = OptionalTwoDecimalNumbers;

export const serviceParemetersValidation: yup.ObjectSchema<ServiceParametersParams> = yup
  .object<ServiceParametersParams>({
    fleetManagement: serviceParameterValidation,
    maintenanceRepairs: serviceParameterValidation,
    tireManagement: serviceParameterValidation,
    fuelManagement: serviceParameterValidation,
    insurance: serviceParameterValidation,
    damageManagement: serviceParameterValidation,
    remarketing: serviceParameterValidation,
    onlineReporting: serviceParameterValidation,
    breakdownAssistance: serviceParameterValidation,
    carReplacement: serviceParameterValidation,
    warrantyExtension: serviceParameterValidation,
    leasing: serviceParameterValidation,
    smr: serviceParameterValidation,
  })
  .defined();

export const marginsAndDiscountParametersValidation: yup.ObjectSchema<MarginAndDiscountsParams> = yup
  .object<MarginAndDiscountsParams>({
    smr: OptionalPercentage,
    smrDiscount: yup.number().nullable().defined(),
    insurance: OptionalTwoDecimalNumbers,
    leasing: yup.number().nullable().defined(),
    tire: yup.number().nullable().defined(),
    tireDiscount: yup.number().nullable().defined(),
    fuel: OptionalTwoDecimalNumbers,
    km: OptionalTwoDecimalNumbers,
  })
  .defined();
