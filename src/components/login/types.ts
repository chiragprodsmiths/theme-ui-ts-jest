import Joi from '@hapi/joi';

export type FormData = {
  userName: string;
  password: string;
};

export type ValidationResultValues = {
  userName: string;
  password: string;
};

export type ValidationErrorValues = {
  userName: Joi.ValidationErrorItem;
  password: Joi.ValidationErrorItem;
};

export type Context = {};
