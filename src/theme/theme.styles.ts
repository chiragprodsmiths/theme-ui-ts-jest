import fontFaces from './theme.fontface';

const Styles = {
  root: {
    ...fontFaces,
    fontFamily: 'body',
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
      fontFamily: 'regular',
    },
    h2: {
      fontFamily: 'regular',
    },
    h3: {
      fontFamily: 'regular',
    },
    h4: {
      fontFamily: 'regular',
    },
    h5: {
      fontFamily: 'regular',
    },
    h6: {
      fontFamily: 'regular',
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
