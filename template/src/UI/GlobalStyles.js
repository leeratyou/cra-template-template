import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import 'normalize.css'
import 'system-font-css'

const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: calc(16px + .25vw);
  }
  body {
    font-family: Heebo, system-ui, sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    background: #cce2e1;
  }
  body[dir='rtl'] {
    direction: rtl;
    .MuiSelect-icon {
      right: auto;
      left: 7px;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }
  @media (min-width: 700px) {
    .MuiContainer-maxWidthMd {
        max-width: 700px;
    }
  }
  
  a {
    text-decoration: none;
    color: #2460c3;
    &:hover {
      border-bottom: 1px solid #4373c3;
    }
  }
`

const GlobalStyles = createGlobalStyle`${globalStyles}`
GlobalStyles.css = globalStyles

export default GlobalStyles
