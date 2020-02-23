import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import styled from 'styled-components'

const StyledAppBar = styled(AppBar)`
  background: ${p => p.theme.color.primary};
`

const StyledTopbar = styled(Toolbar)`
  justify-content: space-between;
  color: ${p => p.theme.color.white}
`

const Appbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledTopbar>
        <div>Header</div>
      </StyledTopbar>
    </StyledAppBar>
  )
}

export default Appbar
