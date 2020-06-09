import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Button, Label, Input, Text, Box, Spinner } from 'theme-ui';
import { useMutation } from 'urql';
/**
 * app components
 */
/**
 * variants
 */
import { EnumButtonVariants } from 'theme/theme.variants.buttons';
import { CustomVariants } from 'theme/theme.variants';
/**
 * Queries / Types / Validation
 */
import { addBrandMutation } from 'queries/queries.brands';
import { FormData, AddBrandResponse } from './types';
import { validationSchema } from './validation';

/**
 * prop types
 */
type PropTypes = {};

const AddBrandForm: React.FC<PropTypes> = () => {
  const [addBrandResult, setAddBrandResult] = useState<AddBrandResponse>();
  const [addBrandErrors, setAddBrandErrors] = useState<boolean>(false);

  // react hook form => types(FormData)
  const { register, handleSubmit, errors, watch } = useForm<FormData>({ validationSchema });

  // setup add brand mutation => types => mutation(AddbrandResponse, )
  const [{ fetching }, addBrand] = useMutation<AddBrandResponse, FormData>(addBrandMutation);

  const { details: watchedDetails } = watch();

  // using this effect to clear submit errors if any of the field changes after error
  useEffect(() => {
    setAddBrandErrors(false);
  }, [
    watchedDetails.name,
    watchedDetails.description,
    watchedDetails.streetNo,
    watchedDetails.streetName,
    watchedDetails.city,
    watchedDetails.zipCode,
    watchedDetails.country,
    watchedDetails.language,
    watchedDetails.currency,
    watchedDetails.timeZone,
    watchedDetails.units,
    watchedDetails.reportHeader,
    watchedDetails.reportFooter,
    watchedDetails.brandLogo,
    watchedDetails.brandColor,
  ]);

  // on form submit
  const onFormSubmit = async (brandObj: FormData): Promise<void> => {
    const { data, error } = await addBrand(brandObj);
    if (error || !data || data === null) {
      setAddBrandErrors(true);
      return;
    }
    setAddBrandResult(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box variant={CustomVariants.COLLAPSE_SECTION}>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.name"
                name="details.name"
                placeholder="Name"
                autoComplete="off"
                autoFocus
                ref={register}
                aria-invalid={errors?.details?.name ? 'true' : 'false'}
                aria-describedby="details.nameError"
                variant={errors?.details?.name ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.name">Name</Label>
              {errors?.details?.name && (
                <Text id="details.nameError" variant="inputError">
                  {errors.details.name.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.description"
                name="details.description"
                placeholder="Description"
                autoComplete="off"
                ref={register}
                variant="input"
              />
              <Label htmlFor="details.description">Description</Label>
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.language"
                name="details.language"
                placeholder="Language"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.language ? 'true' : 'false'}
                aria-describedby="details.languageError"
                variant={errors?.details?.language ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.language">Language</Label>
              {errors?.details?.language && (
                <Text id="details.languageError" variant="inputError">
                  {errors?.details?.language.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.currency"
                name="details.currency"
                placeholder="Currency"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.currency ? 'true' : 'false'}
                aria-describedby="details.currencyError"
                variant={errors?.details?.currency ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.currency">Currency</Label>
              {errors?.details?.currency && (
                <Text id="details.currencyError" variant="inputError">
                  {errors?.details?.currency.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.timeZone"
                name="details.timeZone"
                placeholder="Time Zone"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.timeZone ? 'true' : 'false'}
                aria-describedby="details.timeZoneError"
                variant={errors?.details?.timeZone ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.timeZone">Time Zone</Label>
              {errors?.details?.timeZone && (
                <Text id="details.timeZoneError" variant="inputError">
                  {errors?.details?.timeZone.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.units"
                name="details.units"
                placeholder="Units"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.units ? 'true' : 'false'}
                aria-describedby="details.unitsError"
                variant={errors?.details?.units ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.units">Units</Label>
              {errors?.details?.units && (
                <Text id="details.unitsError" variant="inputError">
                  {errors?.details?.units.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.reportHeader"
                name="details.reportHeader"
                placeholder="Report Header"
                autoComplete="off"
                ref={register}
                variant="input"
              />
              <Label htmlFor="details.reportHeader">Reports Header</Label>
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.reportFooter"
                name="details.reportFooter"
                placeholder="Report Footer"
                autoComplete="off"
                ref={register}
                variant="input"
              />
              <Label htmlFor="details.reportFooter">Reports Footer</Label>
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.brandColor"
                name="details.brandColor"
                placeholder="Brand Primary Color"
                autoComplete="off"
                ref={register}
                variant="input"
              />
              <Label htmlFor="details.brandColor">Brand Primary Color</Label>
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.brandLogo"
                name="logo"
                type="file"
                placeholder="Brand Logo"
                autoComplete="off"
                ref={register}
                variant="input"
              />
              <Label htmlFor="details.brandLogo">Logo</Label>
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
                id="details.streetNo"
                name="details.streetNo"
                placeholder="Street No"
                autoComplete="off"
                ref={register}
                variant="input"
              />
              <Label htmlFor="details.streetNo">Street No</Label>
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.streetName"
                name="details.streetName"
                placeholder="Street Name"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.streetName ? 'true' : 'false'}
                aria-describedby="details.streetNameError"
                variant={errors?.details?.streetName ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.streetName">Street Name</Label>
              {errors?.details?.streetName && (
                <Text id="details.streetNameError" variant="inputError">
                  {errors?.details?.streetName.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.city"
                name="details.city"
                placeholder="City"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.city ? 'true' : 'false'}
                aria-describedby="details.cityError"
                variant={errors?.details?.city ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.city">City</Label>
              {errors?.details?.city && (
                <Text id="details.cityError" variant="inputError">
                  {errors?.details?.city.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.country"
                name="details.country"
                placeholder="Country"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.country ? 'true' : 'false'}
                aria-describedby="details.countryError"
                variant={errors?.details?.country ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.country">Country</Label>
              {errors?.details?.country && (
                <Text id="details.countryError" variant="inputError">
                  {errors?.details?.country.message}
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gap={10} columns={[2, null, 3]}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="details.zipCode"
                name="details.zipCode"
                placeholder="Zip Code"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.details?.zipCode ? 'true' : 'false'}
                aria-describedby="details.zipCodeError"
                variant={errors?.details?.zipCode ? 'inputError' : 'input'}
              />
              <Label htmlFor="details.zipCode">Zip Code</Label>
              {errors?.details?.zipCode && (
                <Text id="details.zipCodeError" variant="inputError">
                  {errors?.details?.zipCode.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Box>
        <Box variant={CustomVariants.COLLAPSE_FOOTER}>
          <Button variant={EnumButtonVariants.PRIMARY} type="submit" disabled={fetching}>
            Save
            {fetching && <Spinner variant={CustomVariants.BUTTON_LOADER_PRIMARY} />}
          </Button>
          <pre>{JSON.stringify(addBrandResult, null, 2)}</pre>
        </Box>
        {/* TODO: @chirag to map below error to urql error message */}
        {addBrandErrors && (
          <Text id="submitError" variant="inputError">
            Add Brand Failed
          </Text>
        )}
      </form>
    </>
  );
};

export default AddBrandForm;
