import { ColorPallete, ColorValue } from './theme.colors.pallete';

const colorVariants = ['text', 'background', 'primary', 'secondary', 'accent', 'highlight', 'muted'] as const;

type ColorVariant = typeof colorVariants[number];

type ColorVariants = {
  [key in ColorVariant]: ColorValue | ColorValue[];
};

const Colors: ColorVariants = {
  background: ColorPallete.cream,
  primary: ColorPallete.cream,
  text: ColorPallete.marun,
  secondary: ColorPallete.marun,
  accent: ColorPallete.marun,
  highlight: ColorPallete.marun,
  muted: ColorPallete.marun,
};

export default Colors;
