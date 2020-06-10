import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, Grid, Button, Label, Input, Text, Heading, Box, Flex, Spinner } from 'theme-ui';
import { useMutation } from 'urql';
/**
 * app components
 */
import Select from 'components/select';
import AddIcon from 'components/icons/icon.add';
import SubtractIcon from 'components/icons/icon.subtract';
/**
 * variants
 */
import { EnumButtonVariants } from 'theme/theme.variants.buttons';
import { CustomVariants } from 'theme/theme.variants';
import { EnumInputVariants } from 'theme/theme.variants.input';
/**
 * Queries / Types / Validation
 */
import { addBrandMutation } from 'queries/queries.brands';
import { FormData, AddBrandResponse } from './types';
import { validationSchema } from './validation';

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
    watchedServiceParameters?.reMarketing?.fmc,
    watchedServiceParameters?.reMarketing?.partner,
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
            <Controller
              as={Select}
              error={!!errors?.details?.language}
              options={options}
              id="details.language"
              name="details.language"
              placeholder="Language*"
              control={control}
            />
            {errors?.details?.language && (
              <Text id="details.languageError" variant="inputError">
                {errors?.details?.language.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              error={!!errors?.details?.currency}
              options={options}
              id="details.currency"
              name="details.currency"
              placeholder="Currency*"
              control={control}
            />
            {errors?.details?.currency && (
              <Text id="details.currencyError" variant="inputError">
                {errors?.details?.currency.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              error={!!errors?.details?.timeZone}
              options={options}
              id="details.timeZone"
              name="details.timeZone"
              placeholder="Time Zone*"
              control={control}
            />
            {errors?.details?.timeZone && (
              <Text id="details.timeZoneError" variant="inputError">
                {errors?.details?.timeZone.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              error={!!errors?.details?.units}
              options={options}
              id="details.units"
              name="details.units"
              placeholder="Units*"
              control={control}
            />
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
                {errors?.details?.streetName.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              error={!!errors?.details?.city}
              options={options}
              placeholder="Select City*"
              name="details.city"
              id="details.city"
              control={control}
            />
            {errors?.details?.city && (
              <Text id="details.cityError" variant="inputError">
                {errors?.details?.city.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              error={!!errors?.details?.country}
              options={options}
              id="details.country"
              name="details.country"
              placeholder="Country*"
              control={control}
            />
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
                {errors?.details?.zipCode.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Box variant={CustomVariants.INPUT_WRAP}>
          <IconButton>
            <AddIcon sx={{ mr: 2 }} />{' '}
            <Text as="span" color="link" sx={{ fontFamily: 'IBMPlexSansMedium' }}>
              Add another Address
            </Text>
          </IconButton>
          <IconButton ml="8">
            <SubtractIcon sx={{ mr: 2 }} />
            <Text as="span" color="link" sx={{ fontFamily: 'IBMPlexSansMedium' }}>
              Remove
            </Text>
          </IconButton>
        </Box>
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
            <Label htmlFor="serviceParameters.fleetManagementFMC">Fleet Management</Label>
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
                aria-describedby="serviceParameters.fleetManagement.fmcError"
                variant={
                  errors?.serviceParameters?.fleetManagement?.fmc
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.serviceParameters?.fleetManagement?.fmc && (
                <Text id="serviceParameters.fleetManagement.fmcError" variant="inputError">
                  {errors?.serviceParameters?.fleetManagement?.fmc?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fleetManagementPartner"
                name="serviceParameters.fleetManagementPartner"
                placeholder="Fleet Management Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.maintenanceRepairsFMC">Maintenance Repairs</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.maintenanceRepairsFMC"
                name="serviceParameters.maintenanceRepairsFMC"
                placeholder="Maintenance Repairs FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.maintenanceRepairsPartner"
                name="serviceParameters.maintenanceRepairsPartner"
                placeholder="Maintenance Repairs Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.tireManagementFMC">Tire Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.tireManagementFMC"
                name="serviceParameters.tireManagementFMC"
                placeholder="Tire Management FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.tireManagementPartner"
                name="serviceParameters.tireManagementPartner"
                placeholder="Tire Management Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.fuelManagementFMC">Fuel Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fuelManagementFMC"
                name="serviceParameters.fuelManagementFMC"
                placeholder="Fuel Management FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.fuelManagementPartner"
                name="serviceParameters.fuelManagementPartner"
                placeholder="Fuel Management Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.insuranceFMC">Insurance</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.insuranceFMC"
                name="serviceParameters.insuranceFMC"
                placeholder="Insurance FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.insurancePartner"
                name="serviceParameters.insurancePartner"
                placeholder="Insurance Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.reMarketingFMC">Remarketing</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.reMarketingFMC"
                name="serviceParameters.reMarketingFMC"
                placeholder="Remarketing FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.reMarketingPartner"
                name="serviceParameters.reMarketingPartner"
                placeholder="Remarketing Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.onlineReportingFMC">Online Reporting</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.onlineReportingFMC"
                name="serviceParameters.onlineReportingFMC"
                placeholder="Online Reporting FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.onlineReportingPartner"
                name="serviceParameters.onlineReportingPartner"
                placeholder="Online Reporting Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.breakdownAssistFMC">Breakdown Assist.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.breakdownAssistFMC"
                name="serviceParameters.breakdownAssistFMC"
                placeholder="Breakdown Assist FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.breakdownAssistPartner"
                name="serviceParameters.breakdownAssistPartner"
                placeholder="Breakdown Assist Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.replacementCarFMC">Replacement Car</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.replacementCarFMC"
                name="serviceParameters.replacementCarFMC"
                placeholder="Replacement Car FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.replacementCarPartner"
                name="serviceParameters.replacementCarPartner"
                placeholder="Replacement Car Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.warrantyExtFMC">Warranty Ext.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.warrantyExtFMC"
                name="serviceParameters.warrantyExtFMC"
                placeholder="Warranty Ext FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.warrantyExtPartner"
                name="serviceParameters.warrantyExtPartner"
                placeholder="Warranty Ext Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.leasingFMC">Leasing</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.leasingFMC"
                name="serviceParameters.leasingFMC"
                placeholder="Leasing FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.leasingPartner"
                name="serviceParameters.leasingPartner"
                placeholder="Leasing Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="serviceParameters.smrFMC">SMR</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.smrFMC"
                name="serviceParameters.smrFMC"
                placeholder="SMR FMC"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="serviceParameters.smrPartner"
                name="serviceParameters.smrPartner"
                placeholder="SMR Partner"
                autoComplete="off"
                ref={register}
                variant={EnumInputVariants.SECONDARY}
              />
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
            <Input id="margins.smr" name="margins.smr" placeholder="SMR %" autoComplete="off" ref={register} />
            <Label htmlFor="margins.smr">SMR %</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.smrDiscount"
              name="margins.smrDiscount"
              placeholder="SMR Discount %"
              autoComplete="off"
              ref={register}
            />
            <Label htmlFor="margins.smrDiscount">SMR Discount %</Label>
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
            />
            <Label htmlFor="margins.insurance">Insurance</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.leasing"
              name="margins.leasing"
              placeholder="Leasing %"
              autoComplete="off"
              ref={register}
            />
            <Label htmlFor="margins.leasing">Leasing %</Label>
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input id="margins.tire" name="margins.tire" placeholder="Tire %" autoComplete="off" ref={register} />
            <Label htmlFor="margins.tire">Tire %</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="margins.tireDiscount"
              name="margins.tireDiscount"
              placeholder="Tire Discount"
              autoComplete="off"
              ref={register}
            />
            <Label htmlFor="margins.tireDiscount">Tire Discount %</Label>
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input id="margins.fuel" name="margins.fuel" placeholder="Fuel" autoComplete="off" ref={register} />
            <Label htmlFor="margins.fuel">Fuel</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input id="margins.km" name="margins.km" placeholder="KM" autoComplete="off" ref={register} />
            <Label htmlFor="margins.km">KM</Label>
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
