import { asUniqueArray } from './types/theme.types.colors';

export const colorValues = asUniqueArray([
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
]);

export type TypeColorValue = typeof colorValues[number];
