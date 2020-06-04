export enum EnumLinksVariants {
  'BREADCRUMB' = 'breadcrumb',
  'SIDEBAR' = 'sidebar',
  'SIDEBAR_ACTIVE' = 'sidebarActive',
}

export type ILinksVariants = Record<EnumLinksVariants, any>;

const LinksVariants: ILinksVariants = {
  breadcrumb: {
    fontSize: 1,
    mr: 2,
    '&:last-child': {
      color: 'muted',
    },
  },
  sidebar: {
    lineHeight: 10,
    pl: 3,
  },
  sidebarActive: {
    lineHeight: 10,
    px: 3,
    py: 2,
    bg: 'primary',
    color: 'white',
    boxShadow: 'buttonShadow',
    borderRadius: 'sm',
  },
};

export default LinksVariants;