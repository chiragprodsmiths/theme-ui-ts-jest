export enum EnumVariants {
  'FOOTER' = 'footer',
  'DASHBOARD_LIST_ITEM' = 'dashboardListItem',
  'INPUT_WRAP' = 'inputWrap',
  'SIGN_IN_BG' = 'signInBg',
  'SIGN_IN_OVERLAY' = 'signInOverlay',
  'BUTTON_LOADER_PRIMARY' = 'buttonLoaderPrimary',
  'BUTTON_LOADER_WHITE' = 'buttonLoaderWhite',
  'MODAL_OVERLAY' = 'modalOverlay',
  'MODAL' = 'modal',
  'MODAL_BODY' = 'modalBody',
}

export type IVariants = Record<EnumVariants, any>;

const Variants: IVariants = {
  footer: {
    color: 'muted',
    pt: 29,
    pb: 6,
    justifyContent: 'center',
    fontSize: 1,
    lineHeight: 'none',
  },
  dashboardListItem: {
    pt: 4,
    pb: 4,
    borderBottom: '1px solid',
    borderColor: 'border',
  },
  signInBg: {
    flex: '1 1 33.33%',
    minHeight: '100vh',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    px: 60,
  },
  signInOverlay: {
    bg: 'authBg',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputWrap: {
    mb: 12,
    position: 'relative',
  },
  buttonLoaderPrimary: {
    position: 'absolute',
    right: 4,
    top: 3,
    stroke: 'white',
    size: 20,
  },
  buttonLoaderWhite: {
    position: 'absolute',
    right: 4,
    top: 3,
    size: 20,
    stroke: 'primary',
  },
  modal: {
    position: 'fixed',
    minHeight: '100vh',
    width: '100%',
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    bg: 'overlay',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalBody: {
    px: 8,
    pt: 5,
    pb: 8,
    bg: 'white',
    borderRadius: 'sm',
    position: 'absolute',
    zIndex: 100,
    width: 435,
  },
};

export default Variants;
