import { useContext } from 'react'

import ErrorBoundaryContext from '../contexts/error-boundary-context'

const useReset = (): Error => {
  const { error } = useContext(ErrorBoundaryContext)

  return error
}

export default useReset
