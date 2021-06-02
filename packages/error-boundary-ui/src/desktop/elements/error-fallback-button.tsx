import React, { ReactNode } from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'

const ErrorFallbackButton = ({ children, ...rest }: ButtonProps): ReactNode => (
  <Button color="blue" {...rest}>
    {children}
  </Button>
)

export default ErrorFallbackButton
