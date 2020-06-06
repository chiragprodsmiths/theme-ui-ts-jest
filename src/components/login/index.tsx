/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

/**
 * Theme UI Components
 */
import { Spinner, Button, Label, Input, Text, Box, Flex, Link, Image, Heading } from 'theme-ui';
/**
 * Custom Components
 */
import Modal from 'components/modal';
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
  const [modal, setModal] = useState(false);
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

  const onModalOpen = () => {
    setModal(true);
  };

  const onModalClose = (): void => {
    setModal(false);
  };

  const onSubmit = (credentials: FormData) => {
    login(credentials);
  };

  return (
    <>
      <Flex sx={{ bg: 'white', minHeight: '100vh', alignItems: 'center' }}>
        <Box variant="signInBg" sx={{ backgroundImage: `url(${SignInBg})` }}>
          <Box variant="signInOverlay" />
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Heading as="h1" color="white" sx={{ fontSize: 40, mb: 2, fontFamily: 'light' }}>
              Welcome
            </Heading>
            <Text color="white" sx={{ lineHeight: 'normal' }}>
              Fleet management and maintenance solution for fleets of all sizes
            </Text>
          </Box>
          <Box sx={{ position: 'absolute', bottom: 6, textAlign: 'center', width: 'calc(100% - 120px)' }}>
            <Text variant="whiteSmall">Powered by Fleet manager</Text>
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 70%' }}>
          <Box sx={{ display: 'flex', maxWidth: '40%', margin: 'auto' }}>
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
                Don't have an Account ?{' '}
                <Button variant="link" type="button" onClick={onModalOpen}>
                  Request an account
                </Button>
              </Text>
            </form>
          </Box>
        </Box>
      </Flex>
      <Modal visible={modal} title="Request an Account" onClose={onModalClose}>
        <Box pb={10}>
          <Text variant="secondaryRegular" sx={{ lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.
          </Text>
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box variant="inputWrap">
              <Input id="name" placeholder="Name" ref={register({ required: true })} />
              <Label htmlFor="name">Name</Label>
            </Box>
            <Box variant="inputWrap">
              <Input id="email" type="email" placeholder="Email" ref={register({ required: true })} />
              <Label htmlFor="email">Email</Label>
            </Box>
            <Box variant="inputWrap">
              <Input id="title" placeholder="title" ref={register({ required: true })} />
              <Label htmlFor="title">Title</Label>
            </Box>
            <Box variant="inputWrap">
              <Input id="organization" placeholder="Organization" ref={register({ required: true })} />
              <Label htmlFor="organization">Organization Name</Label>
            </Box>
            <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Button variant="primary" type="submit">
                Request
              </Button>
              <Button variant="outline">Cancel</Button>
            </Flex>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
