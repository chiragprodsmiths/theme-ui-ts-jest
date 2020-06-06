import Joi from '@hapi/joi';
import { ValidationOutput, Mapper } from './types';

export const defaultMapper: Mapper = <T, V>(result: Joi.ValidationResult): ValidationOutput<T, V> => {
  const { error, value }: Joi.ValidationResult = result;
  return {
    values: error ? {} : value,
    errors: error
      ? error.details.reduce(
          (previous, currentError) => ({
            ...previous,
            [currentError.path[0]]: currentError,
          }),
          {},
        )
      : {},
  };
};
