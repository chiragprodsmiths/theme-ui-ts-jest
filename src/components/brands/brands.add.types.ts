export type BrandDetails = {
  name: string;
  description: string | null;
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
  fmc: string | null;
  partner: string | null;
};

export type ServiceParameters = {
  fleetManagement: ServiceParametersValues;
  maintenanceRepairs: ServiceParametersValues;
  tireManagement: ServiceParametersValues;
  fuelManagement: ServiceParametersValues;
  insurance: ServiceParametersValues;
  damageManagement: ServiceParametersValues;
  remarketing: ServiceParametersValues;
  onlineReporting: ServiceParametersValues;
  breakdownAssist: ServiceParametersValues;
  replacementCar: ServiceParametersValues;
  warrantyExt: ServiceParametersValues;
  leasing: ServiceParametersValues;
  smr: ServiceParametersValues;
};

export type Margins = {
  smr: string | null;
  smrDiscount: string | null;
  insurance: string | null;
  leasing: string | null;
  tire: string | null;
  tireDiscount: string | null;
  fuel: string | null;
  km: string | null;
};

export type FormData = {
  details: BrandDetails;
  serviceParameters: ServiceParameters;
  margins: Margins;
};

export type AddBrandResponse = {
  addBrand?: {
    id: string;
  };
};
