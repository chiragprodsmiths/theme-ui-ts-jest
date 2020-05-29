import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Box } from 'theme-ui';
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
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <input name="userName" defaultValue="" ref={register({ required: true })} />
          {errors.userName && <span>This field is required</span>}
        </Box>
        <Box>
          <input name="password" ref={register({ required: true })} />
          {errors.password && <span>This field is required</span>}
        </Box>
        <input type="submit" />
      </form>
    </Box>
  );
};

export default Login;
