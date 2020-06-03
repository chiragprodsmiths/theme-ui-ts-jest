export enum EnumButtonVariatns {
  'PRIMARY' = 'primary',
  'OUTLINE' = 'outline',
  'ICON' = 'icon',
  'TRANSPARENT' = 'transparent',
}

export type IButtonVariants = Record<EnumButtonVariatns, any>;

/**
 * TODO:
 * primary
 * py is not from theme, minWidth should be number as all values are pixels by default
 * outline
 */
const ButtonVariants: IButtonVariants = {
  primary: {
    px: 3,
    py: '14px',
    color: 'white',
    bg: 'primary',
    minWidth: '178px',
  },
  outline: {
    color: 'white',
    bg: 'secondary',
  },
  icon: {
    width: 'auto',
    height: 'auto',
    padding: 0,
    marginRight: '4px',
    position: 'relative',
    top: '-2px',
  },
  transparent: {
    bg: 'transparent',
    color: 'textLight',
  },
};

export default ButtonVariants;
