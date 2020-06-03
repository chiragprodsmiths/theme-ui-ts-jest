import { ColorPallete, ColorValue } from './theme.colors.pallete';

const colorVariants = ['text', 'background', 'primary', 'secondary', 'accent', 'highlight', 'muted'] as const;

type ColorVariant = typeof colorVariants[number];

type ColorVariants = {
  [key in ColorVariant]: ColorValue;
};

const Colors: ColorVariants = {
  text: ColorPallete.blue,
  background: ColorPallete.red,
  primary: ColorPallete.blue,
  secondary: ColorPallete.red,
  accent: ColorPallete.red,
  highlight: ColorPallete.red,
  muted: ColorPallete.red,
};

export default Colors;
