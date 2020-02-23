import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import { ErrorBoundary } from 'core'

//Pages
import Home from 'pages/Home'

const Routes = () => (
  <ErrorBoundary>
    <Switch>
      <Route path='/home' component={Home} />
      <Redirect exact from='/' to='/home' />
      <Redirect to='/404' />
    </Switch>
  </ErrorBoundary>
)

export default Routes
