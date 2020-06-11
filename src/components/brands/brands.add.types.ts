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
  fmc: number | null;
  partner: number | null;
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
  smr: number | null;
  smrDiscount: number | null;
  insurance: number | null;
  leasing: number | null;
  tire: number | null;
  tireDiscount: number | null;
  fuel: number | null;
  km: number | null;
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
