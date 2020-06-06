import Joi from '@hapi/joi';
import { FormData } from './types';

export const validationSchema: Joi.ObjectSchema<FormData> = Joi.object<FormData>({
  name: Joi.string().required(),
  email: Joi.string().required(),
  organization: Joi.string().required().min(5),
  title: Joi.string().required(),
});
