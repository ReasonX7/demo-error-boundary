import { useEffect } from 'react'

import EventEmitter from 'events'

import useErrorHandler from '../hooks/use-error-handler'

type ErrorEventData = {
  key: string,
  error: any
}

class ExternalErrorStore extends EventEmitter {
  private errors: { [key: string]: any }

  constructor() {
    super();

    this.errors = {}
  }

  public getErrorByKey(key: string): any {
    return this.errors[key]
  }

  public setErrorByKey(key: string, error: any): ExternalErrorStore {
    this.emit('error', { key, error })
    return this
  }
}

export const externalErrorStore = new ExternalErrorStore()

type ExternalErrorTriggerProps = {
  key: string
}

const ExternalErrorTrigger = ({ key }: ExternalErrorTriggerProps) => {
  const handleError = useErrorHandler()

  const handleErrorUpdate = (data: ErrorEventData) => {
    if (key === data.key) {
      handleError(data.error)
    }
  }

  useEffect(() => {
    const error = externalErrorStore.getErrorByKey(key)
    if (error) {
      handleError(error)
    }
  }, [handleError])

  useEffect(() => {
    externalErrorStore.on('error', handleErrorUpdate)

    return () => {
      externalErrorStore.off('error', handleErrorUpdate)
    }
  }, [handleError])

  return null
}

export default ExternalErrorTrigger
