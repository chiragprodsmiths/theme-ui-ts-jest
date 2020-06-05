export enum EnumInputVariants {
  'INPUT' = 'input',
  'ERROR' = 'error',
}

export type IInputVariants = Record<EnumInputVariants, any>;

const InputVariants: IInputVariants = {
  input: {
    outline: 'none',
    px: 4,
    py: 3,
    bg: 'white',
    borderColor: 'border',
    position: 'relative',
    borderRadius: 'sm',
    color: 'text',
    width: '100%',
    lineHeight: 1.4,
    '&::-webkit-input-placeholder': {
      opacity: 0,
      transition: 'inherit',
    },
    '&:focus': {
      borderColor: 'link',
    },
    '& + label': {
      position: 'absolute',
      top: 0,
      left: 4,
      bg: 'white',
      display: 'inline-flex',
      width: 'auto',
      color: 'textLight',
      transition: 'all 0.2s',
      touchAction: 'manipulation',
      transform: 'translate(0, 12px)',
    },
    '&:focus + label': {
      transform: 'translate(0, -8px)',
      cursor: 'pointer',
      px: '2px',
      fontSize: 1,
      color: 'link',
    },
    '&:not(:placeholder-shown)': {
      borderColor: 'link',
    },
    '&:not(:placeholder-shown) + label': {
      transform: 'translate(0, -8px)',
      cursor: 'pointer',
      px: '2px',
      fontSize: 1,
      color: 'link',
    },
    '&:disabled': {
      bg: 'greyShadow',
      color: 'muted',
      borderColor: 'greyShadow',
      cursor: 'not-allowed',
    },
    '&:disabled + label': {
      color: 'muted',
      bg: 'transparent',
    },
  },
  error: {
    px: 4,
    py: 3,
    bg: 'white',
    position: 'relative',
    borderRadius: 'sm',
    color: 'muted',
    borderColor: 'error',
    outline: 'none',
    '& + label': {
      position: 'absolute',
      top: 0,
      left: 4,
      display: 'inline-flex',
      width: 'auto',
      bg: 'white',
      transition: 'all 0.2s',
      touchAction: 'manipulation',
      transform: 'translate(0, 12px)',
    },
    '&:focus + label': {
      transform: 'translate(0, -8px)',
      cursor: 'pointer',
      px: '2px',
      fontSize: 1,
      color: 'error',
    },
    '&:valid + label': {
      transform: 'translate(0, -8px)',
      cursor: 'pointer',
      px: '2px',
      fontSize: 1,
      color: 'error',
    },
  },
};

export default InputVariants;
