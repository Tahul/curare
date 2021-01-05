import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthState } from '../../contexts/auth'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLoggedIn, name } = useAuthState()

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to={`/profile/${name}`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
