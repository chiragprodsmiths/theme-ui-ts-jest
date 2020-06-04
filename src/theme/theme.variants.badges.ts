export enum EnumBadgesVariants {
  'OUTLINE' = 'outline',
}

export type IBadgesVariants = Record<EnumBadgesVariants, any>;

const BadgesVariants: IBadgesVariants = {
  outline: {
    fontSize: 1,
    borderRadius: 'label',
    background: 'white',
    color: 'text',
    display: 'flex',
    fontWeight: 'regular',
    border: '1px solid',
    borderColor: 'border',
    position: 'absolute',
    top: 3,
    right: 3,
    padding: '2px 10px',
  },
};

export default BadgesVariants;
