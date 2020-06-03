// should be unique, should be string
const colorNames = ['cream', 'marun'] as const;

// should be unqie, should be string
const colorValues = ['#F1F4F6', '#7B0537'] as const;

type ColorName = typeof colorNames[number];

export type ColorValue = typeof colorValues[number];

type PalleteColors = {
  [key in ColorName]: ColorValue | ColorValue[];
};

export const ColorPallete: PalleteColors = {
  cream: '#F1F4F6',
  marun: ['#F1F4F6', '#7B0537'],
};
