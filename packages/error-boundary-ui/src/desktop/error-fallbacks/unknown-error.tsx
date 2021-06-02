import React, { ReactNode } from 'react'

import { useError } from '@degry/error-boundary'

import ErrorFallback from '../elements/error-fallback'
import ErrorFallbackFooter from '../elements/error-fallback-footer'
import ErrorFallbackLink from '../elements/error-fallback-link'

import { IExtendedError } from '../../utils/extended-error'

const UnknownError = (): ReactNode => {
  const error = useError() as IExtendedError

  return (
    <ErrorFallback code={error.code} message={error.message}>
      <ErrorFallbackFooter>
        <ErrorFallbackLink to="/overview">Go Home</ErrorFallbackLink>
      </ErrorFallbackFooter>
    </ErrorFallback>
  )
}

export default UnknownError
