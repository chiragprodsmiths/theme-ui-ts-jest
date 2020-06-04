export enum EnumVariants {
  'FOOTER' = 'footer',
  'DASHBOARD_LIST_ITEM' = 'dashboardListItem',
  'INPUT_WRAP' = 'inputWrap',
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
    pb: 3,
    borderBottom: '1px solid',
    borderColor: 'border',
  },
  inputWrap: {
    mb: 10,
  },
};

export default Variants;
