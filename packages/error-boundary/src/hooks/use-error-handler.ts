import { useContext } from 'react'

import ErrorBoundaryContext from '../contexts/error-boundary-context'

type ErrorHandlerCallback = (error: Error) => void

const useErrorHandler = (): ErrorHandlerCallback => {
  const { setError } = useContext(ErrorBoundaryContext)

  return (error: Error) => {
    setError(error)
  }
}

export default useErrorHandler
