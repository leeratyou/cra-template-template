import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Appbar from './Appbar'

const LayoutContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  const { i18n } = useTranslation()
  
  useEffect(() => {
    const body = document.body
    body.dir = i18n.dir()
  }, [])
  
  return (
    <LayoutContainer>
      <Appbar />
      {children}
    </LayoutContainer>
  )
}

export default Layout
