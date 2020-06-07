import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Spinner, Button, Label, Input, Text, Box, Flex, Link, Image, Heading } from 'theme-ui';
import Modal from 'components/modal';
import RequestAnAccount from 'components/request-an-account';
/**
 * Images
 */
import fleetLogo from 'images/logo.png';

import { useMutation } from 'urql';
import { loginQuery } from 'queries/queries.login';
import { FormData } from './types';
import { validationSchema } from './validation';

/**
 * prop types
 */
export type PropTypes = {};

export const Login: React.FC<PropTypes> = () => {
  const [openRequestAnAccount, toggleRequestAnAccountModal] = useState<boolean>(false);

  // react hook form
  const { register, handleSubmit, errors } = useForm<FormData>({ validationSchema });

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

  const onRequestAnAccountOpen = (): void => {
    toggleRequestAnAccountModal(true);
  };

  const onRequestAnAccountClose = (): void => {
    toggleRequestAnAccountModal(false);
  };

  const onLoginSubmit = (credentials: FormData): void => {
    login(credentials);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
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
          Don't have an Account ?{' '}
          <Button variant="link" type="button" onClick={onRequestAnAccountOpen}>
            Request an account
          </Button>
        </Text>
      </form>
      <Modal visible={openRequestAnAccount} title="Request an Account" onClose={onRequestAnAccountClose}>
        <Box pb={10}>
          <Text variant="secondaryRegular" sx={{ lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.
          </Text>
        </Box>
        <Box>
          <RequestAnAccount />
        </Box>
      </Modal>
    </>
  );
};

export default Login;
