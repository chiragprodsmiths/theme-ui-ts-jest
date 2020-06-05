export enum EnumTextVariants {
  'HEADING' = 'heading',
  'WHITE_SMALL' = 'whiteSmall',
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
};

export default TextVariants;
