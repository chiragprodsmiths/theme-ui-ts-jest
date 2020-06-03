// should be unique, should be string
const colorNames = ['maroon', 'black', 'white', 'red', 'green', 'blue', 'yellow', 'grey'] as const;

// should be unqie, should be string
const colorValues = [
  '#7B0537',
  '#7B05373D',
  '#7B053752',
  '#E22D51',
  '#D75B77',
  '#090D19',
  '#1F232C',
  '#0F131E',
  '#00000',
  '#ffffff',
  '#EE7874',
  '#FCB2AB',
  '#31AA61',
  '#5FCC7F',
  '#B0F6B7',
  '#3B6EE6',
  '#33366F',
  '#F98509',
  '#FBAC45',
  '#FEDD9C',
  '#656E7F',
  '#9FACBF',
  '#CFDBE9',
  '#E6EDF5',
  '#F5F8F9',
  '#F1F4F6',
  'rgba(255,255,255,0)',
] as const;

type ColorName = typeof colorNames[number];

export type ColorValue = typeof colorValues[number];

type PaletteColors = {
  [key in ColorName]: ColorValue | ColorValue[];
};

export const ColorPalette: PaletteColors = {
  maroon: [
    '#7B0537', // 0
    '#7B05373D', // 1
    '#7B053752', // 2
    '#D75B77', // 4
  ],
  black: [
    '#090D19', // 0
    '#1F232C', // 1
    '#0F131E', // 2
    '#00000', // 3
  ],
  white: [
    '#ffffff', // 0
    'rgba(255,255,255,0)', // 1
  ],
  red: [
    '#E22D51', // 1
    '#EE7874', // 2
    '#FCB2AB', // 3
  ],
  green: [
    '#31AA61', // 0
    '#5FCC7F', // 1
    '#B0F6B7', // 2
  ],
  blue: [
    '#3B6EE6', // 0
    '#33366F', // 1
  ],
  yellow: [
    '#F98509', // 0
    '#FBAC45', // 1
    '#FEDD9C', // 2
  ],
  grey: [
    '#656E7F', // 0
    '#9FACBF', // 1
    '#CFDBE9', // 2
    '#E6EDF5', // 3
    '#F5F8F9', // 4
    '#F1F4F6', // 5
  ],
};
