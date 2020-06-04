export enum EnumCardsVariants {
  'DASHBOARD_TAB' = 'dashboardTab',
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
};

export default CardsVariants;
