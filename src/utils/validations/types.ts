import Joi from '@hapi/joi';

export type ValidationOutput<T, V> = {
  values: T | {};
  errors: V | {};
};

export type Mapper = {
  <T, V>(result: Joi.ValidationResult): ValidationOutput<T, V>;
};

export interface Resolver {
  <T>(validationSchema: Joi.ObjectSchema<T>, mapper?: Mapper): Function;
}
