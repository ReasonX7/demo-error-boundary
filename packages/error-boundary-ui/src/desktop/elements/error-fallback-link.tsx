import React, { ReactNode } from 'react'
import { Button } from 'semantic-ui-react'
import { LinkProps, Link } from 'react-router-dom'

const ErrorFallbackButton = ({ children, to, ...rest }: LinkProps): ReactNode => (
  <Button color="blue" as={Link} to={to} {...rest}>
    {children}
  </Button>
)

export default ErrorFallbackButton
