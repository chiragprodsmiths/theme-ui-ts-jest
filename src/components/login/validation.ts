import * as yup from 'yup';
import { FormData } from './types';

export const validationSchema = yup
  .object<FormData>({
    userName: yup.string().required().email(),
    password: yup.string().required(),
  })
  .defined();
