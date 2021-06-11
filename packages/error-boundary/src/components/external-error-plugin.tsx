import { useEffect } from 'react'

import EventEmitter from 'events'

import useReset from '../hooks/use-reset'
import useErrorHandler from '../hooks/use-error-handler'

export class ExternalErrorStore extends EventEmitter {
  private error: any

  constructor() {
    super();

    this.error = null
  }

  public getError() {
    return this.error
  }

  public setError(error: any): ExternalErrorStore {
    this.error = error
    this.emit('error', error)
    return this
  }

  public clearError(): ExternalErrorStore {
    this.error = null
    this.emit('clear')
    return this
  }
}

type ExternalErrorTriggerProps = {
  store: ExternalErrorStore
}

const ExternalErrorPlugin = ({ store }: ExternalErrorTriggerProps) => {
  const handleError = useErrorHandler()
  const reset = useReset()

  // First render only.
  useEffect(() => {
    const error = store.getError()
    if (error) {
      handleError(error)
    }
  }, [])

  useEffect(() => {
    store.on('error', handleError)

    return () => {
      store.off('error', handleError)
    }
  }, [handleError])

  useEffect(() => {
    store.on('clear', reset)

    return () => {
      store.off('clear', reset)
    }
  })

  return null
}

export default ExternalErrorPlugin
