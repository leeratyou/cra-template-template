import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Container, Paper } from '@material-ui/core'

const fadeInLeft = keyframes`
  0% {
    opacity: 0.01;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledContainer = styled(Container)`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out;
  animation: ${fadeInLeft} 300ms ease-in-out 1;
`

const StyledPaper = styled(Paper)`
  position: relative;
`

const Page = ({ maxWidth = 'md', children, image, ...props }) => (
  <StyledContainer fixed>
    <StyledPaper {...props}>
      {children}
    </StyledPaper>
  </StyledContainer>
)

export default Page
