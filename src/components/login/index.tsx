import * as React from 'react';
import { useForm } from 'react-hook-form';

import { useMutation } from 'urql';
import { loginQuery } from 'queries/queries.login';
import { FormData } from './types';

export type PropTypes = {};

export const Login: React.FC<PropTypes> = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [{ fetching, data: loginResult, error }, login] = useMutation(loginQuery);

  if (fetching) return <p>Checking Credentials Please wait....</p>;

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loginResult) {
    console.log(loginResult.login.token);
    return (
      <>
        <p>Login Successfull</p>
        <p>{loginResult.login.token}</p>
      </>
    );
  }

  const onSubmit = (credentials: FormData) => {
    login(credentials);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="userName" defaultValue="" ref={register({ required: true })} />
          {errors.userName && <span>This field is required</span>}
        </div>
        <div>
          <input name="password" ref={register({ required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
