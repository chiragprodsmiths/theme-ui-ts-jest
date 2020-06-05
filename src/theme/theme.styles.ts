import fontFaces from './theme.fontface';

const Styles = {
  root: {
    ...fontFaces,
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 2,
    lineHeight: 'body',
    WebkitFontSmoothing: 'antialiased',
    p: {
      fontFamily: 'regular',
    },
    input: {
      fontFamily: 'regular',
    },
    textarea: {
      fontFamily: 'regular',
    },
    h1: {
      fontSize: 5,
    },
    h2: {
      fontSize: 4,
    },
    h3: {
      fontSize: 3,
    },
    h4: {
      fontSize: 2,
    },
    h5: {
      fontSize: 1,
    },
    h6: {
      fontSize: 0,
    },
    button: {
      fontFamily: 'regular',
      outline: 'none',
      cursor: 'pointer',
      position: 'relative',
      '&:focus': {
        outline: 'none',
      },
    },
    a: {
      fontFamily: 'regular',
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
