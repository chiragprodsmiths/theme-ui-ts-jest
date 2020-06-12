export enum CustomVariants {
  'FOOTER' = 'footer',
  'DASHBOARD_LIST_ITEM' = 'dashboardListItem',
  'INPUT_WRAP' = 'inputWrap',
  'INPUT_FILE_WRAP' = 'inputFileWrap',
  'INPUT_FILE_BOX' = 'inputFileBox',
  'SIGN_IN_BG' = 'signInBg',
  'SIGN_IN_OVERLAY' = 'signInOverlay',
  'BUTTON_LOADER_PRIMARY' = 'buttonLoaderPrimary',
  'BUTTON_LOADER_WHITE' = 'buttonLoaderWhite',
  'MODAL_OVERLAY' = 'modalOverlay',
  'MODAL' = 'modal',
  'MODAL_BODY' = 'modalBody',
  'PAGINATION_WRAP' = 'paginationWrap',
  'PAGINATION_PREV' = 'paginationPrev',
  'PAGINATION_Next' = 'paginationNext',
  'COLLAPSE_HEADER' = 'collapseHeader',
  'COLLAPSE_SECTION' = 'collapseSection',
  'COLLAPSE_FOOTER' = 'collapseFooter',
  'SELECTED_FILE_WRAP' = 'selectedFileWrap',
}

export type IVariants = Record<CustomVariants, object>;

export const Variants: IVariants = {
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
  inputFileWrap: {
    mt: -2,
    pb: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  inputFileBox: {
    position: 'relative',
    mt: 2,
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
  paginationWrap: {
    listStyle: 'none',
    p: 0,
    display: 'inline-flex',
    bg: 'white',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'sm',
  },
  paginationPrev: {
    width: 0,
    height: 0,
    textIndent: '9999',
    display: 'inline-flex',
    border: '6px solid',
    borderColor: 'transparent',
    borderRightColor: 'border',
    borderLeft: 'none',
    overflow: 'hidden',
  },
  paginationNext: {
    width: 0,
    height: 0,
    textIndent: '9999',
    display: 'inline-flex',
    border: '6px solid',
    borderColor: 'transparent',
    borderLeftColor: 'border',
    borderRight: 'none',
    overflow: 'hidden',
  },
  collapseHeader: {
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    borderColor: 'border',
    px: 6,
    py: 4,
    alignItems: 'center',
  },
  collapseSection: {
    borderBottom: '1px solid',
    borderColor: 'border',
    px: 12,
    pt: 10,
  },
  collapseFooter: {
    px: 12,
    pb: 10,
    pt: 8,
  },
  selectedFileWrap: {
    position: 'absolute',
    top: '13px',
    left: 2,
  },
};
