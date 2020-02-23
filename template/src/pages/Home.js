import React from 'react'

import Hello from 'components/Hello'
import Page from 'core/Page'

const Home = ({ ...props }) => {
  return (
    <Page>
      <Hello />
      Home
    </Page>
  )
}

export default Home
