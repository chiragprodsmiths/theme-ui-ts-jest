import Colors from './theme.colors';

const Shadows: Record<string, string> = {
  card: `0px 3px 12px ${Colors.greyShadow}`,
  cardHover: `0px 3px 12px ${Colors.pinkShadow}`,
  tabActive: `0px 1px 6px ${Colors.accent}`,
  buttonShadow: `0px 2px 3px ${Colors.secondary}`,
  buttonHoverShadow: `0px 2px 6px ${Colors.buttonHoverShadow}`,
  buttonOutlineShadow: `0px 3px 12px ${Colors.buttonOutlineShadow}`,
};

export default Shadows;
