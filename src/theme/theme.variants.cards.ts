export enum EnumCardsVariants {
  'DASHBOARD_TAB' = 'dashboardTab',
  'DASHBOARD_TAB_ACTIVE' = 'dashboardTabActive',
  'POPOVER' = 'popover',
  'COLLAPSE' = 'collapse',
}

const dashboardTabBase = {
  borderRadius: 'default',
  boxShadow: 'card',
  bg: 'white',
  py: 10,
  position: 'relative',
};

export type ICardsVariants = Record<EnumCardsVariants, any>;

const CardsVariants: ICardsVariants = {
  dashboardTab: {
    ...dashboardTabBase,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'cardHover',
    },
  },
  dashboardTabActive: {
    ...dashboardTabBase,
    cursor: 'no-drop',
    opacity: 0.5,
  },
  popover: {
    position: 'absolute',
    right: 0,
    background: 'white',
    textAlign: 'left',
    minWidth: 272,
    mt: 2,
    boxShadow: 'buttonOutlineShadow',
    padding: 0,
    zIndex: 1,
  },
  collapse: {
    borderRadius: 'default',
    border: '1px solid',
    borderColor: 'border',
    mb: 8,
    bg: 'white',
  },
};

export default CardsVariants;
