class JSONApiError extends Error {
  public status: number

  public readonly response: Response

  constructor(response: Response) {
    super();

    this.status = response.status
    this.message = response.statusText || 'API Error'
  }

  public async parseDetails() {
    const { errors } = await this.response.json()

    const targetError = errors && errors[0]

    return {
      code: targetError?.code || -1,
      message: targetError?.message || 'No message'
    }
  }
}

export default JSONApiError
