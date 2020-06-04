export enum EnumButtonVariatns {
  'PRIMARY' = 'primary',
  'OUTLINE' = 'outline',
  'ICON' = 'icon',
  'TRANSPARENT' = 'transparent',
  'ICON_LINK' = 'iconLink',
  'TAB' = 'tab',
  'TAB_ACTIVE' = 'tabActive',
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
    px: '3',
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
    fontSize: 2,
  },
  iconLink: {
    width: 'auto',
    height: 'auto',
    padding: 0,
    fontSize: 2,
    cursor: 'pointer',
    color: 'text',
  },
  transparent: {
    bg: 'transparent',
    color: 'inherit',
  },
  tab: {
    bg: 'transparent',
    color: 'textLight',
    width: 22,
    borderRadius: 'none',
    '&:hover': {
      color: 'text',
    },
    '&:active': {
      color: 'text',
      boxShadow: 'tabActive',
      borderBottom: '2px solid',
      borderColor: 'primary',
      fontWeight: 'medium',
    },
  },
  tabActive: {
    bg: 'transparent',
    color: 'text',
    width: '88px',
    fontWeight: 'medium',
    borderRadius: 'none',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      left: 0,
      right: 0,
      height: '2px',
      boxShadow: 'tabActive',
      bottom: '-2px',
      bg: 'primary',
      borderRadius: 'sm',
    },
  },
};

export default ButtonVariants;
