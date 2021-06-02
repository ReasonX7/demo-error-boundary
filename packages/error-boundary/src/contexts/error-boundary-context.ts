import { createContext } from 'react'

export type ErrorBoundaryContextProps = {
  error: Error | null,
  setError: (error: Error | null) => void
}

const ErrorBoundaryContext = createContext<ErrorBoundaryContextProps>({
  error: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setError: () => {}
})

export default ErrorBoundaryContext
