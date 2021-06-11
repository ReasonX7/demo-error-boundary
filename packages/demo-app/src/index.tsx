import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Navigation from './modules/navigation'
import Pages from './pages'

const App = () => (
  <BrowserRouter>
    <Container>
      <Navigation>
        <Pages/>
      </Navigation>
    </Container>
  </BrowserRouter>
)

ReactDOM.render(<App/>, document.getElementById('app'))
