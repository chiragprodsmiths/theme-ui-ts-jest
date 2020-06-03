import { ColorPalette, ColorValue } from './theme.colors.palette';

const colorVariants = [
  'background',
  'primary',
  'text',
  'secondary',
  'accent',
  'highlight',
  'muted',
  'textLight',
  'border',
  'logo',
  'logoText',
  'subHeader',
  'link',
  'label',
  'greyShadow',
  'pinkShadow',
  'activeShadow',
  'transparent',
  'black',
  'white',
] as const;

type ColorVariant = typeof colorVariants[number];

type ColorVariants = {
  [key in ColorVariant]: ColorValue | ColorValue[];
};

const Colors: ColorVariants = {
  // background: ColorPalette.grey[5],
  // primary: ColorPalette.maroon[0],
  // text: ColorPalette.black[0],
  // secondary: ColorPalette.black[2],
  // accent: ColorPalette.red[2],
  // highlight: ColorPalette.blue[0],
  // muted: ColorPalette.grey[1],
  // textLight: ColorPalette.grey[0],
  // border: ColorPalette.grey[2],
  // logo: ColorPalette.blue[1],
  // logoText: ColorPalette.black[0],
  // subHeader: ColorPalette.grey[4],
  // link: ColorPalette.blue[0],
  // label: ColorPalette.maroon[4],
  // greyShadow: ColorPalette.grey[3],
  // pinkShadow: ColorPalette.maroon[1],
  // activeShadow: ColorPalette.maroon[2],
  // transparent: ColorPalette.white[1],
  // black: ColorPalette.black[3],
  // white: ColorPalette.white[0],
  background: ColorPalette.grey,
  primary: ColorPalette.maroon,
  text: ColorPalette.black,
  secondary: ColorPalette.black,
  accent: ColorPalette.red,
  highlight: ColorPalette.blue,
  muted: ColorPalette.grey,
  textLight: ColorPalette.grey,
  border: ColorPalette.grey,
  logo: ColorPalette.blue,
  logoText: ColorPalette.black,
  subHeader: ColorPalette.grey,
  link: ColorPalette.blue,
  label: ColorPalette.maroon,
  greyShadow: ColorPalette.grey,
  pinkShadow: ColorPalette.maroon,
  activeShadow: ColorPalette.maroon,
  transparent: ColorPalette.white,
  black: ColorPalette.black,
  white: ColorPalette.white,
};

export default Colors;
