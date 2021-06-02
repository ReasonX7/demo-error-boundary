import React, { ReactNode } from 'react'
import { Grid, Image } from 'semantic-ui-react'

type ErrorFallbackProps = {
  code: number | string,
  message: string,
  children?: ReactNode
}

const ErrorFallback = ({ code, message, children }: ErrorFallbackProps): ReactNode => (
  <Grid>
    <Grid.Row columns="1" centered>
      <Grid.Column width="3">
        <Image src="/assets/warning.svg"/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns="1" centered>
      <Grid.Column width="3">
        <h3>{`Error code: ${code}`}</h3>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns="1" centered>
      <Grid.Column width="3">
        {message}
      </Grid.Column>
    </Grid.Row>
    {children || null}
  </Grid>
)

export default ErrorFallback
