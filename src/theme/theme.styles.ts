import fontFaces from './theme.fontface';

const Styles = {
  root: {
    ...fontFaces,
    fontFamily: 'body',
    lineHeight: 'body',
    WebkitFontSmoothing: 'antialiased',
    p: {
      fontFamily: 'imbPlex',
    },
    input: {
      fontFamily: 'imbPlex',
    },
    textarea: {
      fontFamily: 'imbPlex',
    },
    h1: {
      fontFamily: 'imbPlex',
    },
    h2: {
      fontFamily: 'imbPlex',
    },
    h3: {
      fontFamily: 'imbPlex',
    },
    h4: {
      fontFamily: 'imbPlex',
    },
    h5: {
      fontFamily: 'imbPlex',
    },
    h6: {
      fontFamily: 'imbPlex',
    },
    button: {
      fontFamily: 'imbPlex',
      outline: 'none',
      cursor: 'pointer',
      position: 'relative',
      '&:focus': {
        outline: 'none',
      },
    },
    a: {
      fontFamily: 'imbPlex',
      textDecoration: 'none',
      color: 'link',
    },
    img: {
      maxWidth: '100%',
    },
    form: {
      width: '100%',
    },
  },
};

export default Styles;
