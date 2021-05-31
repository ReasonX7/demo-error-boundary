import { createContext } from 'react'

export type ErrorBoundaryContextProps = {
  setError: (error: Error | null) => void
}

const ErrorBoundaryContext = createContext<ErrorBoundaryContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setError: () => {}
})

export default ErrorBoundaryContext
