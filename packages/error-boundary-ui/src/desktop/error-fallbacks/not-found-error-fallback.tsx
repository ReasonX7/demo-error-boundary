import React, { ReactNode } from 'react'

import ErrorFallback from '../elements/error-fallback'
import ErrorFallbackFooter from '../elements/error-fallback-footer'
import ErrorFallbackLink from '../elements/error-fallback-link'

import codes from '../../codes'

const NotFoundErrorFallback = (): ReactNode => (
  <ErrorFallback code={codes.APPLICATION_RUNTIME_EXCEPTION} message="Page Not Found">
    <ErrorFallbackFooter>
      <ErrorFallbackLink to="/overview">Go Home</ErrorFallbackLink>
    </ErrorFallbackFooter>
  </ErrorFallback>
)

export default NotFoundErrorFallback
