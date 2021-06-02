import { ReactNode, useEffect } from 'react'
import { useErrorHandler } from '@degry/error-boundary'

type ErrorTriggerProps = {
  error: Error
}

const ErrorTrigger = ({ error }: ErrorTriggerProps): ReactNode => {
  const handleError = useErrorHandler()

  useEffect(() => {
    handleError(error)
  }, [])

  return null
}

export default ErrorTrigger
