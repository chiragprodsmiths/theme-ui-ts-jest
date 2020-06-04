export enum EnumTextVariants {
  'HEADING' = 'heading',
}

export type ITextVariants = Record<EnumTextVariants, any>;

const TextVariants: ITextVariants = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
  },
};

export default TextVariants;
