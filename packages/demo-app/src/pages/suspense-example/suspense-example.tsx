import React, { ReactNode, useEffect, useState } from 'react'

import { Button, Grid, Image } from 'semantic-ui-react'
import { ErrorBoundary, useReset } from '@degry/error-boundary'

const ErrorFallback = (): ReactNode => {
  const reset = useReset()

  return (
    <Grid>
      <Grid.Row columns="1" centered>
        <Grid.Column width="3">
          <Image src="/assets/warning.svg"/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="1" centered>
        <Grid.Column textAlign="center">
          <Button onClick={reset} color="blue">
            Reset
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const ErrorThrower = () => {
  const [falsy, setFalsy] = useState(false)

  useEffect(() => {
    if (falsy) {
      throw new Error('An ErrorThrower error.')
    }
  }, [falsy])

  return (
    <>
      <p>Press the button to generate an error.</p>
      <button onClick={() => setFalsy(true)}>Throw Error</button>
    </>
  )
}

const SuspenseExample = (): ReactNode => {
  return (
    <ErrorBoundary fallback={<ErrorFallback/>}>
      <ErrorThrower/>
    </ErrorBoundary>
  )
}

export default SuspenseExample
