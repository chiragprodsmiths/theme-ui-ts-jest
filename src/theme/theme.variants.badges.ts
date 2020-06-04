export enum EnumBadgesVariants {
  'OUTLINE' = 'outline',
}

export type IBadgesVariants = Record<EnumBadgesVariants, any>;

const BadgesVariants: IBadgesVariants = {
  outline: {
    fontSize: 1,
    fontWeight: 'regular',
    borderRadius: 'label',
    bg: 'white',
    color: 'text',
    border: '1px solid',
    borderColor: 'border',
    px: 2,
    py: '2px',
  },
};

export default BadgesVariants;
