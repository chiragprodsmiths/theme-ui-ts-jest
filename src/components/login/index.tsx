/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useForm } from 'react-hook-form';
/**
 * Theme UI Component
 */
import { Spinner, Button, Label, Input, Text, Box, Flex, Link, Image, Heading } from 'theme-ui';
/**
 * Images
 */
import fleetLogo from 'images/logo.png';

import { useMutation } from 'urql';
import { loginQuery } from 'queries/queries.login';
import { FormData, Context } from './types';
import { useValidationResolver } from './validation';

/**
 * prop types
 */
export type PropTypes = {};

export const Login: React.FC<PropTypes> = () => {
  // validation resolver
  const validationResolver = useValidationResolver();

  // react hook form
  const { register, handleSubmit, errors } = useForm<FormData, Context>({
    validationResolver,
    validationContext: {},
  });

  console.log(errors);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 10 }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Image src={fleetLogo} variant="logo" />
          <Heading color="logoText" sx={{ fontFamily: 'semiBold' }}>
            BRAND LOGO
          </Heading>
        </Flex>
      </Box>
      <Heading as="h1" sx={{ mb: 10 }}>
        Sign in
      </Heading>
      <Box variant="inputWrap">
        <Input
          id="email"
          type="email"
          name="userName"
          placeholder="Email"
          autoComplete="email"
          autoFocus
          ref={register}
          aria-invalid={errors.userName ? 'true' : 'false'}
          aria-describedby="userNameError"
        />
        <Label htmlFor="email">Email</Label>
        {errors.userName && (
          <Text
            id="userNameError"
            sx={{
              color: 'error',
              pl: 4,
              pt: 1,
              position: 'absolute',
              display: 'none',
            }}>
            {errors.userName.message}
          </Text>
        )}
      </Box>
      <Flex sx={{ justifyContent: 'flex-end', position: 'relative' }}>
        <Link variant="secondarySmall" tabIndex={-1} href="/#" sx={{ position: 'absolute', right: 0, bottom: '6px' }}>
          Forgot your password?
        </Link>
      </Flex>
      <Box variant="inputWrap">
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          ref={register}
          aria-invalid={errors.password ? 'true' : 'false'}
          aria-describedby="passwordError"
        />
        <Label htmlFor="password">Password</Label>
        {errors.password && (
          <Text
            id="passwordError"
            sx={{
              color: 'error',
              pl: 4,
              pt: 1,
              position: 'absolute',
              display: 'none',
            }}>
            {errors.password.message}
          </Text>
        )}
      </Box>
      <Box variant="inputWrap">
        <Button variant="primary" type="submit">
          Sign in
          {fetching && <Spinner variant="buttonLoaderPrimary" />}
        </Button>
      </Box>
      <Text sx={{ color: 'textLight', fontSize: 1 }}>
        Don't have an Account ? <Link href="/#">Request an account</Link>
      </Text>
    </form>
  );
};

export default Login;
