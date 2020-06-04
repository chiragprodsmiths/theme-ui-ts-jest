import Styles from './theme.styles';
import Colors from './theme.colors';
import Typography from './theme.typography';
import Radii from './theme.radii';
import Shadows from './theme.shadows';
import Space from './theme.spaces';
import ButtonVariants from './theme.variants.buttons';
import BadgesVariants from './theme.variants.badges';
import InputVariants from './theme.variants.input';
import LinkVariants from './theme.variants.links';
import ImagesVariants from './theme.variants.images';
import CardsVariants from './theme.variants.cards';
import TextVariants from './theme.variants.text';
import Variants from './theme.variants';

export const theme = {
  styles: Styles,
  colors: Colors,
  fonts: Typography.fonts,
  fontSizes: Typography.fontSizes,
  fontWeights: Typography.fontWeights,
  lineHeights: Typography.lineHeights,
  space: Space,
  shadows: Shadows,
  radii: Radii,
  buttons: ButtonVariants,
  badges: BadgesVariants,
  input: InputVariants,
  links: LinkVariants,
  cards: CardsVariants,
  images: ImagesVariants,
  text: TextVariants,
  variants: Variants,
};
