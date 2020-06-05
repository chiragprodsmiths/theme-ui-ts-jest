export enum EnumTextVariants {
  'HEADING' = 'heading',
  'WHITE_X_SMALL' = 'whiteXSmall',
}

export type ITextVariants = Record<EnumTextVariants, any>;

const TextVariants: ITextVariants = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
  },
  whiteXSmall: {
    fontSize: 10,
    color: 'white',
  },
};

export default TextVariants;
