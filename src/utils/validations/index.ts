import Joi from '@hapi/joi';
import useValidationResolver from './useValidationResolver';

const createSchema = <T>(schema: Joi.SchemaMap<T>): Joi.ObjectSchema<T> => Joi.object<T>(schema);

export { createSchema, useValidationResolver };
