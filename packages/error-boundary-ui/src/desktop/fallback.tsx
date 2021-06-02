import React, { ReactNode } from 'react'

import { useError } from '@degry/error-boundary'
import { IExtendedError } from '../utils/extended-error'

import ApplicationErrorFallback from './error-fallbacks/application-error-fallback'

import codes from '../codes'
import NotFoundErrorFallback from './error-fallbacks/not-found-error-fallback'
import UnknownError from './error-fallbacks/unknown-error'

const Fallback = (): ReactNode => {
  const { code } = useError() as IExtendedError

  switch (code) {
    case codes.APPLICATION_RUNTIME_EXCEPTION:
      return <ApplicationErrorFallback/>
    case codes.HTTP_NOT_FOUND:
      return <NotFoundErrorFallback/>
    default:
      return <UnknownError/>
  }
}

export default Fallback
