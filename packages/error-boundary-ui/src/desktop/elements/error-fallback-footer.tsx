import React, { ReactNode } from 'react'
import { Grid } from 'semantic-ui-react'

type ErrorFallbackFooterProps = {
  children: ReactNode
}

const ErrorFallbackFooter = ({ children }: ErrorFallbackFooterProps): ReactNode => (
  <Grid.Row columns="1" centered>
    <Grid.Column textAlign="center">
      {children}
    </Grid.Column>
  </Grid.Row>
)

export default ErrorFallbackFooter
