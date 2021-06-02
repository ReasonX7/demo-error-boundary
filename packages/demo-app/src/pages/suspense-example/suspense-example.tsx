import React, { ReactNode, useEffect, useState } from 'react'

import { useErrorHandler, ErrorBoundary, ErrorTrigger, useError } from '@degry/error-boundary'
import { Fallback, ErrorFallback, ErrorFallbackLink, ErrorFallbackFooter } from '@degry/error-boundary-ui/desktop'
import { ExtendedError, IExtendedError } from '@degry/error-boundary-ui'

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
      <button onClick={() => handleError(new ExtendedError('Custom Error', { code: 200_000 }))}>Custom Error</button>
    </>
  )
}

const CustomFallback = () => {
  const error = useError() as IExtendedError

  switch (error.code) {
    case 200_000:
      return (
        <ErrorFallback code={error.code} message={error.message}>
          <ErrorFallbackFooter>
            <ErrorFallbackLink to="/overview">Go to Overview</ErrorFallbackLink>
          </ErrorFallbackFooter>
        </ErrorFallback>
      )
    default:
      return <Fallback/>
  }
}

const SuspenseExample = (): ReactNode => {
  return (
    <ErrorBoundary fallback={<CustomFallback/>}>
      <ErrorThrower/>
    </ErrorBoundary>
  )
}

export default SuspenseExample
