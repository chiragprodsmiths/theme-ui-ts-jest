// should be unique
const colorNames = ['red', 'blue'] as const;

// should be unqie
const colorValues = ['#171760', '#ff0000'] as const;

type ColorName = typeof colorNames[number];

export type ColorValue = typeof colorValues[number];

type PalleteColors = {
  [key in ColorName]: ColorValue;
};

export const ColorPallete: PalleteColors = {
  blue: '#171760',
  red: '#ff0000',
};
