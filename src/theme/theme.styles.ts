import fontFaces from './theme.fontface';

const Styles = {
  root: {
    ...fontFaces,
    fontFamily: 'body',
    lineHeight: 'body',
    WebkitFontSmoothing: 'antialiased',
    button: {
      outline: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
    a: {
      textDecoration: 'none',
      color: 'link',
    },
  },
};

export default Styles;
