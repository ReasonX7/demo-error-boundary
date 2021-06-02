import React, { ReactNode, Component, ErrorInfo } from 'react'

import ErrorBoundaryContext from '../contexts/error-boundary-context'

type ErrorBoundaryProps = {
  onError?: (error: Error, errorInfo?: ErrorInfo) => void,
  children: ReactNode,
  fallback: ReactNode
}

type ErrorBoundaryState = {
  error: Error | null,
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      errorInfo: null
    }

    this.setError = this.setError.bind(this)
  }

  private setError(error: Error, errorInfo: ErrorInfo | null) {
    this.setState({ error, errorInfo })
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setError(error, errorInfo)
  }

  public render() {
    return (
      <ErrorBoundaryContext.Provider value={{ error: this.state.error, setError: this.setError }}>
        {this.state.error ? this.props.fallback : this.props.children}
      </ErrorBoundaryContext.Provider>
    )
  }
}

export default ErrorBoundary
