/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useForm } from 'react-hook-form';

/**
 * Theme UI Component
 */
import { Spinner, Button, Label, Input, Text, Box, Flex, Link, Image } from 'theme-ui';
/**
 * Images
 */
import fleetLogo from 'images/logo.png';
import SignInBg from 'images/sign-in-bg.jpg';

import { useMutation } from 'urql';
import { loginQuery } from 'queries/queries.login';
import { FormData } from './types';

export type PropTypes = {};

export const Login: React.FC<PropTypes> = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
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
    <Flex sx={{ bg: 'white', minHeight: '100vh', alignItems: 'center' }}>
      <Box variant="signInBg" sx={{ backgroundImage: `url(${SignInBg})` }}>
        <Box variant="signInOverlay" />
        <Box sx={{ color: 'white', position: 'relative', textAlign: 'center' }}>
          <Text sx={{ fontSize: 40, mb: 2, fontWeight: 'thin' }}>Welcome</Text>
          <Text sx={{ lineHeight: 'normal' }}>Fleet management and maintenance solution for fleets of all sizes</Text>
        </Box>
        <Box sx={{ position: 'absolute', bottom: 6, textAlign: 'center', width: 'calc(100% - 120px)' }}>
          <Text variant="whiteXSmall">Powered by Fleet manager</Text>
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 70%' }}>
        <Box sx={{ display: 'flex', maxWidth: '40%', margin: 'auto' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: 10 }}>
              <Flex sx={{ alignItems: 'center' }}>
                <Image src={fleetLogo} variant="logo" />
                <Text
                  sx={{
                    fontWeight: 'semiBold',
                    color: 'logoText',
                  }}>
                  BRAND LOGO
                </Text>
              </Flex>
            </Box>
            <Text sx={{ mb: 10, fontSize: 5, fontWeight: 'medium' }}>Sign in</Text>
            <Box variant="inputWrap">
              <Input id="email" placeholder="Email" ref={register({ required: true })} />
              <Label htmlFor="email">Email</Label>
            </Box>
            {/* {errors.userName && <span>This field is required</span>} */}
            <Flex sx={{ justifyContent: 'flex-end', position: 'relative' }}>
              <Link variant="secondarySmall" href="/#" sx={{ position: 'absolute', right: 0, bottom: '6px' }}>
                Forgot your password?
              </Link>
            </Flex>
            <Box variant="inputWrap">
              <Input id="password" placeholder="Password" ref={register({ required: true })} />
              <Label htmlFor="password">Password</Label>
              <Text
                sx={{
                  color: 'error',
                  pl: 4,
                  pt: 1,
                  position: 'absolute',
                  display: 'none',
                }}>
                Password is required
              </Text>
            </Box>
            {/* {errors.password && <span>This field is required</span>} */}
            <Box variant="inputWrap">
              <Button variant="primary" type="submit">
                Sign in
                <Spinner variant="buttonLoaderPrimary" />
              </Button>
            </Box>
            <Text sx={{ color: 'textLight', fontSize: 1 }}>
              Don't have an Account ? <Link href="/#">Request an account</Link>
            </Text>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
