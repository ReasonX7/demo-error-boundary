import React, { ReactNode } from 'react'

import { useReset, useError } from '@degry/error-boundary'

import ErrorFallback from '../elements/error-fallback'
import ErrorFallbackFooter from '../elements/error-fallback-footer'
import ErrorFallbackButton from '../elements/error-fallback-button'

import codes from '../../codes'

const ApplicationErrorFallback = (): ReactNode => {
  const reset = useReset()
  const error = useError()

  return (
    <ErrorFallback code={codes.APPLICATION_RUNTIME_EXCEPTION} message={error.message}>
      <ErrorFallbackFooter>
        <ErrorFallbackButton onClick={reset}>Reset</ErrorFallbackButton>
      </ErrorFallbackFooter>
    </ErrorFallback>
  )
}

export default ApplicationErrorFallback
