import Colors from './theme.colors';

// const Shadows: Record<string, string> = {
//   card: `0px 3px 12px ${Colors.greyShadow}`,
//   cardHover: `0px 3px 12px ${Colors.pinkShadow}`,
//   tabActive: `0px 1px 6px ${Colors.activeShadow}`,
//   buttonShadow: `0px 2px 3px ${Colors.activeShadow}`,
// };

const Shadows: Record<string, string> = {
  card: `0px 3px 12px ${Colors.primary}`,
  cardHover: `0px 3px 12px ${Colors.background}`,
  tabActive: `0px 1px 6px ${Colors.accent}`,
  buttonShadow: `0px 2px 3px ${Colors.secondary}`,
};

export default Shadows;
