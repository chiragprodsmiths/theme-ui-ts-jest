export enum EnumTextVariants {
  'HEADING' = 'heading',
  'WHITE_SMALL' = 'whiteSmall',
  'SECONDARY_REGULAR' = 'secondaryRegular',
}

export type ITextVariants = Record<EnumTextVariants, any>;

const TextVariants: ITextVariants = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
  },
  whiteSmall: {
    fontSize: 12,
    color: 'white',
  },
  secondaryRegular: {
    fontSize: 16,
    color: 'textLight',
  },
};

export default TextVariants;
