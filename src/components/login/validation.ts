import * as yup from 'yup';
import { FormData, UserNameErrorMessages, PasswordErrorMessages } from './types';

export const validationSchema = yup
  .object<FormData>({
    userName: yup.string().required(UserNameErrorMessages.REQUIRED).email(UserNameErrorMessages.VALID),
    password: yup.string().required(PasswordErrorMessages.REQUIRED),
  })
  .defined();
