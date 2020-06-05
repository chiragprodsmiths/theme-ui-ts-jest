export enum EnumLinksVariants {
  'BREADCRUMB' = 'breadcrumb',
  'SIDEBAR' = 'sidebar',
  'SIDEBAR_ACTIVE' = 'sidebarActive',
  'ICON_LINK' = 'iconLink',
  'POPOVER_LIST_ITEM' = 'popoverListItem',
  'POPOVER_LIST_ITEM_ACTIVE' = 'popoverListItemActive',
  'SECONDARY_SMALL' = 'secondarySmall',
}

export type ILinkVariants = Record<EnumLinksVariants, any>;

const LinkVariants: ILinkVariants = {
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
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    color: 'link',
    fontSize: 14,
    lineHeight: 1,
  },
  popoverListItem: {
    display: 'block',
    px: 4,
    py: 3,
    color: 'text',
    '&:hover': {
      bg: 'primary',
      color: 'white',
    },
  },
  popoverListItemActive: {
    display: 'block',
    px: 4,
    py: 3,
    color: 'primary',
    '&:hover': {
      color: 'primary',
    },
  },
  secondarySmall: {
    fontSize: 1,
    color: 'textLight',
  },
};

export default LinkVariants;
