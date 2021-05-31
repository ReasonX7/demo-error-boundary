import React, { ReactNode } from 'react'

import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import Overview from './overview'
import ReduxExample from './redux-example'
import SuspenseExample from './suspense-example'

import routes from '../modules/navigation/routes'

const Pages = (): ReactNode => (
  <Container>
    <Switch>
      <Route path={routes.suspense}>
        <SuspenseExample/>
      </Route>
      <Route path={routes.redux}>
        <ReduxExample/>
      </Route>
      <Route path={routes.overview}>
        <Overview/>
      </Route>
    </Switch>
  </Container>
)

export default Pages
