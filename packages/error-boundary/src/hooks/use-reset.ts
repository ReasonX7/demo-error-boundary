import { useContext } from 'react'

import ErrorBoundaryContext from '../contexts/error-boundary-context'

type ResetCallback = () => void

const useReset = (): ResetCallback => {
  const { setError } = useContext(ErrorBoundaryContext)

  return () => {
    setError(null)
  }
}

export default useReset
