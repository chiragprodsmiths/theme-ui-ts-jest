import { useCallback } from 'react';
import Joi from '@hapi/joi';
import { ValidationOutput, Mapper } from './types';
import { defaultMapper } from './common';

const useValidationResolver = <T, O = {}, E = {}, C = {}>(
  validationSchema: Joi.ObjectSchema<T>,
  mapper: Mapper = defaultMapper,
): ((data: T, context?: C) => Promise<ValidationOutput<O, E>>) =>
  useCallback(
    async (data: T, context?: C): Promise<ValidationOutput<O, E>> => {
      // log context could be used further for advanced usage
      if (context) console.log('Context ===>>>>', context);

      // joi validation result
      const { error, value }: Joi.ValidationResult = await validationSchema.validate(data, {
        abortEarly: false,
      });

      console.log(error, value);

      // use mapper to map result needed accordingly
      const mapperResult: ValidationOutput<O, E> = mapper({ error, value });

      // return result
      return mapperResult;
    },
    [validationSchema],
  );

export default useValidationResolver;
