const theme = {
  unit: 'rem',
  fontSize: {
    text: '1rem',
    sub: '0.8rem',
    heading1: 'calc(1.625rem + 1.6vw)',
    heading2: 'calc(1.375rem + 1.5vw)',
    heading3: 'calc(1.25rem + 1vw)',
    heading4: 'calc(1.135rem + .6vw)',
    heading5: 'calc(1.125rem + .25vw)',
    heading6: 'calc(1rem + .25vw)'
  },
  color: {
    base: '#383855',
    text: '#606077',
    primary: '#195a63',
    disable: '#cccccc',
    link: '#2460c3',
    white: '#ffffff',
    red: '#c13636',
    green: '#2f8256',
    back: '#cce2e1',
  },
  space(...args) {
    const result = (args.length ? [...args] : [1]).reduce((str, curr) => `${str} ${curr}rem`, '')
    return result
  },
  css: {
    centered: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
    transition: 'all 300ms ease-in-out;',
  }
}

export default theme
