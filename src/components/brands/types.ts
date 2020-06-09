export type BrandDetails = {
  name: string;
  description?: string;
  streetNo?: string;
  streetName: string;
  city: string;
  zipCode: string;
  country: string;
  language: string;
  currency: string;
  timeZone: string;
  units: string;
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
