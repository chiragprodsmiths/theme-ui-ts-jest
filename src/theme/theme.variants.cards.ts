export enum EnumCardsVariants {
  'DASHBOARD' = 'dashboard',
  'DASHBOARD_DISABLED' = 'dashboardDisabled',
  'POPOVER' = 'popover',
}

const dashboardCommon = {
  borderRadius: 'default',
  boxShadow: 'card',
  bg: 'white',
  py: 10,
  position: 'relative',
};

export type ICardsVariants = Record<EnumCardsVariants, object>;

const CardsVariants: ICardsVariants = {
  dashboard: {
    ...dashboardCommon,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'cardHover',
    },
  },
  dashboardDisabled: {
    ...dashboardCommon,
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
};

export default CardsVariants;
