import React, { ReactNode } from 'react'

import { Menu, Segment } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

import routes from './routes'

type NavigationProps = {
  children: ReactNode
}

const Navigation = ({ children }: NavigationProps): ReactNode => {
  const { pathname } = useLocation()

  return (
    <>
      <Menu secondary pointing>
        <Menu.Item
          as={Link}
          to={routes.overview}
          name="overview"
          active={pathname === routes.overview}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={routes.suspense}
          name="reviews"
          active={pathname === routes.suspense}
        >
          Suspense
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={routes.portal}
          name="portal"
          active={pathname === routes.portal}
        >
          Portal
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={routes.redux}
          name="redux"
          active={pathname === routes.redux}
        >
          Redux
        </Menu.Item>
      </Menu>
      <Segment>
        {children}
      </Segment>
    </>
  )
}
export default Navigation
