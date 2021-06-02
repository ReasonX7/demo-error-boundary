import React, { ReactNode, useEffect, useState } from 'react'

import { useErrorHandler, ErrorBoundary, ErrorTrigger } from '@degry/error-boundary'
import { Fallback } from '@degry/error-boundary-ui/desktop'
import { ExtendedError } from '@degry/error-boundary-ui'

const ErrorThrower = () => {
  const [falsy, setFalsy] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const handleError = useErrorHandler()

  useEffect(() => {
    if (falsy) {
      throw new ExtendedError('A Suspense error')
    }
  }, [falsy])

  if (trigger) {
    return <ErrorTrigger error={new ExtendedError('This error was trigger by ErrorTrigger component')}/>
  }

  return (
    <>
      <p>Press the button to generate an error.</p>
      <button onClick={() => setFalsy(true)}>Throw Suspense Error</button>
      <button onClick={() => setTrigger(true)}>ErrorTrigger</button>
      <button onClick={() => handleError(new ExtendedError('This error was set via errorHandler hook'))}>useErrorHandler</button>
    </>
  )
}

const SuspenseExample = (): ReactNode => {
  return (
    <ErrorBoundary fallback={<Fallback/>}>
      <ErrorThrower/>
    </ErrorBoundary>
  )
}

export default SuspenseExample
