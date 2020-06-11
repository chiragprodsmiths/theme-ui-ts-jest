import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Button, Label, Input, Text, Heading, Box, Flex, Spinner } from 'theme-ui';
import { useMutation } from 'urql';
/**
 * app components
 */
import Select from 'components/select';
/**
 * Style variants
 */
import { EnumButtonVariants } from 'theme/theme.variants.buttons';
import { CustomVariants } from 'theme/theme.variants';
import { EnumInputVariants } from 'theme/theme.variants.input';
/**
 * Queries / Types / Validation
 */
import { addBrandMutation } from 'queries/queries.brands';
import { FormData, AddBrandResponse } from './brands.add.types';
import { validationSchema } from './brands.add.validation';

const options = [
  { value: '1', label: 'Lorem Ipsum' },
  { value: '2', label: 'Lorem Ipsum' },
  { value: '3', label: 'Lorem Ipsum' },
];

/**
 * prop types
 */
type PropTypes = {};

const AddBrandForm: React.FC<PropTypes> = () => {
  const [addBrandErrors, setAddBrandErrors] = useState<boolean>(false);

  // react hook form => types(FormData)
  const { register, handleSubmit, errors, watch, control, getValues } = useForm<FormData>({ validationSchema });

  // setup add brand mutation => types => mutation(AddbrandResponse, )
  const [{ fetching }, addBrand] = useMutation<AddBrandResponse, FormData>(addBrandMutation);

  const { details: watchedDetails, serviceParameters: watchedServiceParameters, margins: watchedMargins } = watch();

  // using this effect to clear submit errors if any of the field changes after error
  useEffect(() => {
    setAddBrandErrors(false);
  }, [
    watchedDetails?.name,
    watchedDetails?.description,
    watchedDetails?.streetNo,
    watchedDetails?.streetName,
    watchedDetails?.city,
    watchedDetails?.zipCode,
    watchedDetails?.country,
    watchedDetails?.language,
    watchedDetails?.currency,
    watchedDetails?.timeZone,
    watchedDetails?.units,
    watchedDetails?.reportHeader,
    watchedDetails?.reportFooter,
    watchedDetails?.brandLogo,
    watchedDetails?.brandColor,
    watchedServiceParameters?.fleetManagement?.fmc,
    watchedServiceParameters?.fleetManagement?.partner,
    watchedServiceParameters?.maintenanceRepairs?.fmc,
    watchedServiceParameters?.maintenanceRepairs?.partner,
    watchedServiceParameters?.tireManagement?.fmc,
    watchedServiceParameters?.fuelManagement?.fmc,
    watchedServiceParameters?.fuelManagement?.partner,
    watchedServiceParameters?.insurance?.fmc,
    watchedServiceParameters?.insurance?.partner,
    watchedServiceParameters?.remarketing?.fmc,
    watchedServiceParameters?.remarketing?.partner,
    watchedServiceParameters?.onlineReporting?.fmc,
    watchedServiceParameters?.onlineReporting?.partner,
    watchedServiceParameters?.breakdownAssist?.fmc,
    watchedServiceParameters?.breakdownAssist?.partner,
    watchedServiceParameters?.replacementCar?.fmc,
    watchedServiceParameters?.replacementCar?.partner,
    watchedServiceParameters?.warrantyExt?.fmc,
    watchedServiceParameters?.warrantyExt?.partner,
    watchedServiceParameters?.leasing?.fmc,
    watchedServiceParameters?.leasing?.partner,
    watchedServiceParameters?.smr?.fmc,
    watchedServiceParameters?.smr?.partner,
    watchedMargins?.smr,
    watchedMargins?.smrDiscount,
    watchedMargins?.insurance,
    watchedMargins?.leasing,
    watchedMargins?.tire,
    watchedMargins?.tireDiscount,
    watchedMargins?.fuel,
    watchedMargins?.km,
  ]);

  // on form submit
  const onFormSubmit = async (brandObj: FormData): Promise<void> => {
    console.log(brandObj);
    // TODO: @ankit remove comment
    const { data, error } = await addBrand(brandObj);
    if (error || !data || data === null) {
      setAddBrandErrors(true);
      console.log(addBrandErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {/* Brand Details */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Brand Details
        </Heading>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="details.name"
              name="details.name"
              placeholder="Name*"
              autoComplete="off"
              autoFocus
              ref={register}
              aria-invalid={errors?.details?.name ? 'true' : 'false'}
              aria-describedby="details.nameError"
              variant={errors?.details?.name ? 'inputError' : 'input'}
            />
            <Label htmlFor="details.name">Name*</Label>
            {errors?.details?.name && (
              <Text id="details.nameError" variant="inputError">
                {errors?.details?.name?.message}
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
            <Controller
              as={Select}
              id="details.language"
              name="details.language"
              placeholder="Language*"
              options={options}
              control={control}
              error={!!errors?.details?.language}
            />
            {errors?.details?.language && (
              <Text id="details.languageError" variant="inputError">
                {errors?.details?.language?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="details.currency"
              name="details.currency"
              placeholder="Currency*"
              options={options}
              control={control}
              error={!!errors?.details?.currency}
            />
            {errors?.details?.currency && (
              <Text id="details.currencyError" variant="inputError">
                {errors?.details?.currency?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="details.timeZone"
              error={!!errors?.details?.timeZone}
              options={options}
              name="details.timeZone"
              placeholder="Time Zone*"
              control={control}
            />
            {errors?.details?.timeZone && (
              <Text id="details.timeZoneError" variant="inputError">
                {errors?.details?.timeZone?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="details.units"
              error={!!errors?.details?.units}
              options={options}
              name="details.units"
              placeholder="Units*"
              control={control}
            />
            {errors?.details?.units && (
              <Text id="details.unitsError" variant="inputError">
                {errors?.details?.units?.message}
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
      {/* Address */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Address
        </Heading>
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
              placeholder="Street Name*"
              autoComplete="off"
              ref={register}
              aria-invalid={errors?.details?.streetName ? 'true' : 'false'}
              aria-describedby="details.streetNameError"
              variant={errors?.details?.streetName ? 'inputError' : 'input'}
            />
            <Label htmlFor="details.streetName">Street Name*</Label>
            {errors?.details?.streetName && (
              <Text id="details.streetNameError" variant="inputError">
                {errors?.details?.streetName?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="details.city"
              name="details.city"
              options={options}
              placeholder="Select City*"
              control={control}
              error={!!errors?.details?.city}
            />
            {errors?.details?.city && (
              <Text id="details.cityError" variant="inputError">
                {errors?.details?.city?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="details.country"
              name="details.country"
              placeholder="Country*"
              options={options}
              control={control}
              error={!!errors?.details?.country}
            />
            {errors?.details?.country && (
              <Text id="details.countryError" variant="inputError">
                {errors?.details?.country?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="details.zipCode"
              name="details.zipCode"
              placeholder="Zip Code*"
              autoComplete="off"
              ref={register}
              aria-invalid={errors?.details?.zipCode ? 'true' : 'false'}
              aria-describedby="details.zipCodeError"
              variant={errors?.details?.zipCode ? 'inputError' : 'input'}
            />
            <Label htmlFor="details.zipCode">Zip Code*</Label>
            {errors?.details?.zipCode && (
              <Text id="details.zipCodeError" variant="inputError">
                {errors?.details?.zipCode?.message}
              </Text>
            )}
          </Box>
        </Grid>
      </Box>
      {/* Service Parameters */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Service Parameters
        </Heading>
        <Grid gap={10} columns={3} mb={3}>
          <Box />
          <Grid gap={4} columns={2}>
            <Label sx={{ justifyContent: 'center' }}>FMC</Label>
            <Label sx={{ justifyContent: 'center' }}>Partner</Label>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.fleetManagement.fmc">Fleet Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fleetManagement.fmc"
                name="serviceParameters.fleetManagement.fmc"
                placeholder="Fleet Management FMC"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.serviceParameters?.fleetManagement?.fmc ? 'true' : 'false'}
                aria-describedby="serviceParameters.fleetManagement.fmc.Error"
                variant={
                  errors?.serviceParameters?.fleetManagement?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.fleetManagement?.fmc && (
                <Text id="serviceParameters.fleetManagement.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.fleetManagement?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fleetManagement.partner"
                name="serviceParameters.fleetManagement.partner"
                placeholder="Fleet Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.fleetManagement?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.fleetManagement?.partner && (
                <Text id="serviceParameters.fleetManagement.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.fleetManagement?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.maintenanceRepairs.fmc">Maintenance Repairs</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.maintenanceRepairs.fmc"
                name="serviceParameters.maintenanceRepairs.fmc"
                placeholder="Maintenance Repairs FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.maintenanceRepairs?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.maintenanceRepairs?.fmc && (
                <Text id="serviceParameters.maintenanceRepairs.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.maintenanceRepairs?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.maintenanceRepairs.partner"
                name="serviceParameters.maintenanceRepairs.partner"
                placeholder="Maintenance Repairs Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.maintenanceRepairs?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.maintenanceRepairs?.partner && (
                <Text id="serviceParameters.maintenanceRepairs.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.maintenanceRepairs?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.tireManagement.fmc">Tire Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.tireManagement.fmc"
                name="serviceParameters.tireManagement.fmc"
                placeholder="Tire Management FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.tireManagement?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.tireManagement?.fmc && (
                <Text id="serviceParameters.tireManagement.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.tireManagement?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.tireManagement.partner"
                name="serviceParameters.tireManagement.partner"
                placeholder="Tire Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.tireManagement?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.tireManagement?.partner && (
                <Text id="serviceParameters.tireManagement.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.tireManagement?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.fuelManagement.fmc">Fuel Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fuelManagement.fmc"
                name="serviceParameters.fuelManagement.fmc"
                placeholder="Fuel Management FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.fuelManagement?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.fuelManagement?.fmc && (
                <Text id="serviceParameters.fuelManagement.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.fuelManagement?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fuelManagement.partner"
                name="serviceParameters.fuelManagement.partner"
                placeholder="Fuel Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.fuelManagement?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.fuelManagement?.partner && (
                <Text id="serviceParameters.fuelManagement.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.fuelManagement?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.insurance.fmc">Insurance</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.insurance.fmc"
                name="serviceParameters.insurance.fmc"
                placeholder="Insurance FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.insurance?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.insurance?.fmc && (
                <Text id="serviceParameters.insurance.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.insurance?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.insurance.partner"
                name="serviceParameters.insurance.partner"
                placeholder="Insurance Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.insurance?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.insurance?.partner && (
                <Text id="serviceParameters.insurance.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.insurance?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.remarketing.fmc">Remarketing.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.remarketing.fmc"
                name="serviceParameters.remarketing.fmc"
                placeholder="Remarketing FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.remarketing?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.remarketing?.fmc && (
                <Text id="serviceParameters.remarketing.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.remarketing?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.remarketing.partner"
                name="serviceParameters.remarketing.partner"
                placeholder="Remarketing Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.remarketing?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.remarketing?.partner && (
                <Text id="serviceParameters.remarketing.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.remarketing?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.onlineReporting.fmc">Online Reporting</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.onlineReporting.fmc"
                name="serviceParameters.onlineReporting.fmc"
                placeholder="Online Reporting FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.onlineReporting?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.onlineReporting?.fmc && (
                <Text id="serviceParameters.onlineReporting.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.onlineReporting?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.onlineReporting.partner"
                name="serviceParameters.onlineReporting.partner"
                placeholder="Online Reporting Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.onlineReporting?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.onlineReporting?.partner && (
                <Text id="serviceParameters.onlineReporting.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.onlineReporting?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.breakdownAssist.fmc">Breakdown Assist.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.breakdownAssist.fmc"
                name="serviceParameters.breakdownAssist.fmc"
                placeholder="Breakdown Assist FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.breakdownAssist?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.breakdownAssist?.fmc && (
                <Text id="serviceParameters.breakdownAssist.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.breakdownAssist?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.breakdownAssist.partner"
                name="serviceParameters.breakdownAssist.partner"
                placeholder="Breakdown Assist Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.breakdownAssist?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.breakdownAssist?.partner && (
                <Text id="serviceParameters.breakdownAssist.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.breakdownAssist?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.replacementCar.fmc">Replacement Car</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.replacementCar.fmc"
                name="serviceParameters.replacementCar.fmc"
                placeholder="Replacement Car FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.replacementCar?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.replacementCar?.fmc && (
                <Text id="serviceParameters.replacementCar.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.replacementCar?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.replacementCar.partner"
                name="serviceParameters.replacementCar.partner"
                placeholder="Replacement Car Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.replacementCar?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.replacementCar?.partner && (
                <Text id="serviceParameters.replacementCar.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.replacementCar?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.warrantyExt.fmc">Warranty Ext.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.warrantyExt.fmc"
                name="serviceParameters.warrantyExt.fmc"
                placeholder="Warranty Ext FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.warrantyExt?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.warrantyExt?.fmc && (
                <Text id="serviceParameters.warrantyExt.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.warrantyExt?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.warrantyExt.partner"
                name="serviceParameters.warrantyExt.partner"
                placeholder="Warranty Ext Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.warrantyExt?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.warrantyExt?.partner && (
                <Text id="serviceParameters.warrantyExt.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.warrantyExt?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.leasing.fmc">Leasing</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.leasing.fmc"
                name="serviceParameters.leasing.fmc"
                placeholder="Leasing FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.leasing?.fmc ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.leasing?.fmc && (
                <Text id="serviceParameters.leasing.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.leasing?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.leasing.partner"
                name="serviceParameters.leasing.partner"
                placeholder="Leasing Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.leasing?.partner
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.leasing?.partner && (
                <Text id="serviceParameters.leasing.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.leasing?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.smr.fmc">SMR</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.smr.fmc"
                name="serviceParameters.smr.fmc"
                placeholder="SMR FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.smr?.fmc ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.smr?.fmc && (
                <Text id="serviceParameters.smr.fmc.Error" variant="inputError">
                  {errors?.serviceParameters?.smr?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.smr.partner"
                name="serviceParameters.smr.partner"
                placeholder="SMR Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.serviceParameters?.smr?.partner ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.smr?.partner && (
                <Text id="serviceParameters.smr.partner.Error" variant="inputError">
                  {errors?.serviceParameters?.smr?.partner?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Margins & Discounts */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Margins & Discounts
        </Heading>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.smr"
              name="margins.smr"
              placeholder="SMR %"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.smr ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.smr">SMR %</Label>
            {errors?.margins?.smr && (
              <Text id="margins.smr.Error" variant="inputError">
                {errors?.margins?.smr?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.smrDiscount"
              name="margins.smrDiscount"
              placeholder="SMR Discount %"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.smrDiscount ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.smrDiscount">SMR Discount %</Label>
            {errors?.margins?.smrDiscount && (
              <Text id="margins.smrDiscount.Error" variant="inputError">
                {errors?.margins?.smrDiscount?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.insurance"
              name="margins.insurance"
              placeholder="Insurance"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.insurance ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.insurance">Insurance</Label>
            {errors?.margins?.insurance && (
              <Text id="margins.insurance.Error" variant="inputError">
                {errors?.margins?.insurance?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.leasing"
              name="margins.leasing"
              placeholder="Leasing %"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.leasing ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.leasing">Leasing %</Label>
            {errors?.margins?.leasing && (
              <Text id="margins.leasing.Error" variant="inputError">
                {errors?.margins?.leasing?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.tire"
              name="margins.tire"
              placeholder="Tire %"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.tire ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.tire">Tire %</Label>
            {errors?.margins?.tire && (
              <Text id="margins.tire.Error" variant="inputError">
                {errors?.margins?.tire?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.tireDiscount"
              name="margins.tireDiscount"
              placeholder="Tire Discount"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.tireDiscount ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.tireDiscount">Tire Discount %</Label>
            {errors?.margins?.tireDiscount && (
              <Text id="margins.tireDiscount.Error" variant="inputError">
                {errors?.margins?.tireDiscount?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.fuel"
              name="margins.fuel"
              placeholder="Fuel"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.fuel ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.fuel">Fuel</Label>
            {errors?.margins?.fuel && (
              <Text id="margins.fuel.Error" variant="inputError">
                {errors?.margins?.fuel?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.km"
              name="margins.km"
              placeholder="KM"
              autoComplete="off"
              ref={register}
              variant={errors?.margins?.km ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="margins.km">KM</Label>
            {errors?.margins?.km && (
              <Text id="margins.km.Error" variant="inputError">
                {errors?.margins?.km?.message}
              </Text>
            )}
          </Box>
        </Grid>
      </Box>
      <Flex variant={CustomVariants.COLLAPSE_FOOTER}>
        <Button variant={EnumButtonVariants.PRIMARY} type="submit" disabled={fetching} sx={{ mr: 5 }}>
          Save
          {fetching && <Spinner variant={CustomVariants.BUTTON_LOADER_PRIMARY} />}
        </Button>
        <Button variant={EnumButtonVariants.OUTLINE} type="button">
          Cancel
        </Button>
      </Flex>
      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
      {/* TODO: @chirag to map below error to urql error message */}
      {addBrandErrors && (
        <Text id="submitError" variant="inputError">
          Add Brand Failed
        </Text>
      )}
    </form>
  );
};

export default AddBrandForm;
