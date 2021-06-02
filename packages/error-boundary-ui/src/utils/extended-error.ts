import codes from '../codes'

export interface IExtendedError {
  readonly uid: string
  readonly code: number
  readonly message: string
  readonly stack: string
}

type ExtendedErrorOptions = {
  uid?: string,
  code?: number
}

const getUid = () => Math.random().toString(36).substring(7)

class ExtendedError extends Error implements IExtendedError {
  public readonly uid: string
  public readonly code: number
  public readonly message: string
  public readonly stack: string

  constructor(message: string, {
    uid = getUid(),
    code = codes.APPLICATION_RUNTIME_EXCEPTION
  }: ExtendedErrorOptions = {}) {
    super(message);

    this.uid = uid
    this.code = code
  }

  static async fromResponse(response: Response) {
    const { errors } = await response.json()

    const targetError = errors && errors[0]

    const options = {
      uid: targetError?.uid || getUid(),
      code: targetError?.code || targetError?.status || codes.FETCH_EXCEPTION
    }

    return new ExtendedError(targetError, options)
  }

  public toObject(): IExtendedError {
    return {
      uid: this.uid,
      code: this.code,
      message: this.message,
      stack: this.stack
    }
  }
}

export default ExtendedError
