export type BrandDetails = {
  name: string;
  description?: string;
  streetNo?: string;
  streetName: string;
  city: object;
  zipCode: string;
  country: object;
  language: object;
  currency: object;
  timeZone: object;
  units: object;
  reportHeader?: string;
  reportFooter?: string;
  brandLogo?: File;
  brandColor?: string;
};

export type ServiceParametersValues = {
  fmc?: number;
  partner?: number;
};

export type ServiceParameters = {
  fleetManagement?: ServiceParametersValues;
  maintenanceRepairs?: ServiceParametersValues;
  tireManagement?: ServiceParametersValues;
  fuelManagement?: ServiceParametersValues;
  insurance?: ServiceParametersValues;
  damageManagement?: ServiceParametersValues;
  reMarketing?: ServiceParametersValues;
  onlineReporting?: ServiceParametersValues;
  breakdownAssist?: ServiceParametersValues;
  replacementCar?: ServiceParametersValues;
  warrantyExt?: ServiceParametersValues;
  leasing?: ServiceParametersValues;
  smr?: ServiceParametersValues;
};

export type Margins = {
  smr?: number;
  smrDiscount?: number;
  insurance?: number;
  leasing?: number;
  tire?: number;
  tireDiscount?: number;
  fuel?: number;
  km?: number;
};

export type FormData = {
  details: BrandDetails;
  serviceParameters: ServiceParameters;
  margins?: Margins;
};

export type AddBrandResponse = {
  addBrand?: {
    id: string;
  };
};
