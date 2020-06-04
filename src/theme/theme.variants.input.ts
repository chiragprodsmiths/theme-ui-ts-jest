export enum EnumInputVariants {
  'REGULAR' = 'regular',
}

export type IInputVariants = Record<EnumInputVariants, any>;

const InputVariants: IInputVariants = {
  regular: {
    outline: 'none',
    px: 3,
    py: 4,
    bg: 'white',
    borderColor: 'border',
    borderRadius: 'sm',
    color: 'muted',
    '&:focus': {
      color: 'text',
      borderColor: 'link',
    },
  },
};

export default InputVariants;
