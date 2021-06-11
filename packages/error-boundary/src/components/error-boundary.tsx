import React, { ReactNode, Component, ErrorInfo } from 'react'

import ErrorBoundaryContext from '../contexts/error-boundary-context'

type ErrorBoundaryProps = {
  id?: 'global' | string,
  onError?: (error: Error, errorInfo?: ErrorInfo) => void,
  error?: any,
  children: ReactNode,
  fallback: ReactNode,
  plugin: ReactNode
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
        <>
          {this.props.plugin || null}
          {this.state.error ? this.props.fallback : this.props.children}
        </>
      </ErrorBoundaryContext.Provider>
    )
  }
}

export default ErrorBoundary
