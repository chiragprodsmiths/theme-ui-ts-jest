import { useCallback } from 'react';
import Joi from '@hapi/joi';
import { FormData, Context } from './types';

export const validationSchema: Joi.ObjectSchema<FormData> = Joi.object<FormData>({
  userName: Joi.string().required(),
  password: Joi.string().required(),
});

export const resolver = async (error: any, value: any): Promise<any> => {
  console.log('Validation Errors ===>>>>', error);

  console.log('Validation Error Details ===>>>>', error ? error.details : {});

  console.log('Validation Values ===>>>>', value);

  // use mapper to map result needed accordingly
  const result = {
    values: error ? {} : value,
    errors: error
      ? error.details.reduce(
          (previous: any, currentError: any) => ({
            ...previous,
            [currentError.path[0]]: currentError,
          }),
          {},
        )
      : {},
  };

  // return result
  return result;
};

export const useValidationResolver = () =>
  useCallback(
    async (data: FormData, context?: Context) => {
      // log context could be used further for advanced usage
      if (context) console.log('Context ===>>>>', context);

      // joi validation result
      const { error, value }: Joi.ValidationResult = await validationSchema.validate(data, {
        abortEarly: false,
      });

      // use mapper to map result needed accordingly
      const mapperResult = resolver(error, value);

      // return result
      return mapperResult;
    },
    [validationSchema],
  );
