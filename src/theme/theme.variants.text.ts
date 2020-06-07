export enum EnumTextVariants {
  'HEADING' = 'heading',
  'WHITE_SMALL' = 'whiteSmall',
  'SECONDARY_REGULAR' = 'secondaryRegular',
  'INPUT_ERROR' = 'inputError',
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
  inputError: {
    color: 'error',
    pl: 4,
    pt: '2px',
    position: 'absolute',
  },
};

export default TextVariants;
