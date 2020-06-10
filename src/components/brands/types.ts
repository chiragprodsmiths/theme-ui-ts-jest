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

export type FormData = {
  details: BrandDetails;
};

export type AddBrandResponse = {
  addBrand?: {
    id: string;
  };
};
