export enum EnumCardsVariants {
  'DASHBOARD_TAB' = 'dashboardTab',
  'POPOVER' = 'popover',
}

export type ICardsVariants = Record<EnumCardsVariants, any>;

const CardsVariants: ICardsVariants = {
  dashboardTab: {
    borderRadius: 'default',
    boxShadow: 'card',
    cursor: 'pointer',
    bg: 'white',
    py: 10,
    position: 'relative',
    '&:hover': {
      boxShadow: 'cardHover',
    },
  },
  popover: {
    position: 'absolute',
    right: 0,
    background: 'white',
    textAlign: 'left',
    minWidth: 272,
    mt: 3,
    boxShadow: 'buttonOutlineShadow',
    padding: 0,
    zIndex: 1,
  },
};

export default CardsVariants;
