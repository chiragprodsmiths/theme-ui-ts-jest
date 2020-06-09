import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { useMutation } from 'urql';
/**
 * Theme UI Components
 */
import { Grid, Button, Label, Input, Text, Box } from 'theme-ui';
/**
 * App components
 */
// import Select from 'components/select';
/**
 * Variants
 */
import { EnumButtonVariants } from 'theme/theme.variants.buttons';
import { CustomVariants } from 'theme/theme.variants';
/**
 * Queries / Types / Validation
 */
// import { loginQuery } from 'queries/queries.login';
import { FormData, ManageUsersResponse } from './types';
import { validationSchema } from './validation';

/**
 * Select Dummy Options
 */
// const options = [
//   { value: 'Lorem Ipsum', label: 'Lorem Ipsum' },
//   { value: 'Lorem Ipsum', label: 'Lorem Ipsum' },
//   { value: 'Lorem Ipsum', label: 'Lorem Ipsum' },
// ];

/**
 * prop types
 */
type PropTypes = {};

const ManageUsersForm: React.FC<PropTypes> = () => {
  const [manageUsersResult, setManageUsersResult] = useState<ManageUsersResponse>();
  const [manageUsersErrors, setManageUsersErrors] = useState<boolean>(false);
  console.log(manageUsersErrors);

  // react hook form => types(FormData)
  const { register, handleSubmit, errors, watch } = useForm<FormData>({ validationSchema });

  // setup login mutation => types => mutation(ManageUsersResponse, loginRequest)
  // const [{ fetching }, login] = useMutation<ManageUsersResponse, FormData>(loginQuery);

  const { name: watchedName } = watch();

  // using this effect to clear submit errors if any of the field changes after error
  useEffect(() => {
    setManageUsersErrors(false);
  }, [watchedName]);

  // // open register account modal
  // const onRequestAnAccountOpen = (): void => {
  //   toggleRequestAnAccountModal(true);
  // };

  // // close register account modal
  // const onRequestAnAccountClose = (): void => {
  //   toggleRequestAnAccountModal(false);
  // };

  // Manage Users form submit
  const onSubmit = async (data: FormData): Promise<void> => {
    console.log(data);
    // setManageUsersResult(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box variant={CustomVariants.COLLAPSE_SECTION}>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.name ? 'inputError' : 'input'}
                id="name"
                name="name"
                placeholder="Name"
                autoComplete="name"
                autoFocus
                ref={register}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby="nameError"
              />
              <Label htmlFor="name">Name</Label>
              {errors.name && (
                <Text id="nameError" variant="inputError">
                  {errors.name.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant="input"
                id="description"
                name="description"
                placeholder="Description"
                autoComplete="description"
                autoFocus
                ref={register}
              />
              <Label htmlFor="description">Description</Label>
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.language ? 'inputError' : 'input'}
                id="language"
                name="language"
                placeholder="Language"
                autoComplete="language"
                autoFocus
                ref={register}
                aria-invalid={errors.language ? 'true' : 'false'}
                aria-describedby="languageError"
              />
              <Label htmlFor="language">Language</Label>
              {errors.language && (
                <Text id="languageError" variant="inputError">
                  {errors.language.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.currency ? 'inputError' : 'input'}
                id="currency"
                name="currency"
                placeholder="Currency"
                autoComplete="currency"
                autoFocus
                ref={register}
                aria-invalid={errors.currency ? 'true' : 'false'}
                aria-describedby="currencyError"
              />
              <Label htmlFor="currency">Currency</Label>
              {errors.currency && (
                <Text id="currencyError" variant="inputError">
                  {errors.currency.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.time_zone ? 'inputError' : 'input'}
                id="time_zone"
                name="time_zone"
                placeholder="Time-zone"
                autoComplete="time_zone"
                autoFocus
                ref={register}
                aria-invalid={errors.time_zone ? 'true' : 'false'}
                aria-describedby="timeZoneError"
              />
              <Label htmlFor="time_zone">Time-zone</Label>
              {errors.time_zone && (
                <Text id="timeZoneError" variant="inputError">
                  {errors.time_zone.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.units ? 'inputError' : 'input'}
                id="units"
                name="units"
                placeholder="Units"
                autoComplete="units"
                autoFocus
                ref={register}
                aria-invalid={errors.units ? 'true' : 'false'}
                aria-describedby="unitsError"
              />
              <Label htmlFor="units">Units</Label>
              {errors.units && (
                <Text id="unitsError" variant="inputError">
                  {errors.units.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant="input"
                id="reports_header"
                name="reports_header"
                placeholder="Reports Header"
                autoComplete="reports_header"
                autoFocus
                ref={register}
              />
              <Label htmlFor="reports_header">Reports Header</Label>
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant="input"
                id="reports_footer"
                name="reports_footer"
                placeholder="Reports Footer"
                autoComplete="reports_footer"
                autoFocus
                ref={register}
              />
              <Label htmlFor="reports_footer">Reports Footer</Label>
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant="input"
                id="reports_primary_color"
                name="reports_primary_color"
                placeholder="Brand Primary Color"
                autoComplete="reports_primary_color"
                autoFocus
                ref={register}
              />
              <Label htmlFor="reports_primary_color">Brand Primary Color</Label>
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant="input"
                type="file"
                id="logo"
                name="logo"
                placeholder="Logo"
                autoComplete="logo"
                autoFocus
                ref={register}
              />
              <Label htmlFor="logo">Logo</Label>
            </Box>
          </Grid>
        </Box>
        <Box variant={CustomVariants.COLLAPSE_SECTION}>
          <Text mb="6" sx={{ fontWeight: 'medium' }}>
            Address
          </Text>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant="input"
                id="street_no"
                name="street_no"
                placeholder="Street No"
                autoComplete="street_no"
                autoFocus
                ref={register}
              />
              <Label htmlFor="street_no">Street No</Label>
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.street_name ? 'inputError' : 'input'}
                id="street_name"
                name="street_name"
                placeholder="Street Name"
                autoComplete="street_name"
                autoFocus
                ref={register}
                aria-invalid={errors.street_name ? 'true' : 'false'}
                aria-describedby="streetNameError"
              />
              <Label htmlFor="street_name">Street Name</Label>
              {errors.street_name && (
                <Text id="streetNameError" variant="inputError">
                  {errors.street_name.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.city ? 'inputError' : 'input'}
                id="city"
                name="city"
                placeholder="City"
                autoComplete="city"
                autoFocus
                ref={register}
                aria-invalid={errors.city ? 'true' : 'false'}
                aria-describedby="cityError"
              />
              <Label htmlFor="city">City</Label>
              {errors.city && (
                <Text id="cityError" variant="inputError">
                  {errors.city.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.country ? 'inputError' : 'input'}
                id="country"
                name="country"
                placeholder="Country"
                autoComplete="country"
                autoFocus
                ref={register}
                aria-invalid={errors.country ? 'true' : 'false'}
                aria-describedby="countryError"
              />
              <Label htmlFor="country">Country</Label>
              {errors.country && (
                <Text id="countryError" variant="inputError">
                  {errors.country.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                variant={errors.zip_code ? 'inputError' : 'input'}
                id="zip_code"
                name="zip_code"
                placeholder="Zip Code"
                autoComplete="zip_code"
                autoFocus
                ref={register}
                aria-invalid={errors.zip_code ? 'true' : 'false'}
                aria-describedby="zipCodeError"
              />
              <Label htmlFor="zip_code">Zip Code</Label>
              {errors.zip_code && (
                <Text id="zipCodeError" variant="inputError">
                  {errors.zip_code.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Box>
        <Box variant={CustomVariants.COLLAPSE_FOOTER}>
          <Button
            variant={EnumButtonVariants.PRIMARY}
            type="submit"
            // disabled={fetching}
          >
            Save
            {/* {fetching && <Spinner variant={CustomVariants.BUTTON_LOADER_PRIMARY} />} */}
          </Button>
          <pre>{JSON.stringify(manageUsersResult, null, 2)}</pre>
        </Box>
      </form>
    </>
  );
};

export default ManageUsersForm;
