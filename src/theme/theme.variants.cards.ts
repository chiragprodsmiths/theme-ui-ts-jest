export enum EnumCardsVariants {
  'DASHBOARD' = 'dashboard',
}

export type ICardsVariants = Record<EnumCardsVariants, any>;

const CardsVariants: ICardsVariants = {
  dashboard: {
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
