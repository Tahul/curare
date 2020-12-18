import React from 'react'

// Contexts
import { useAuthState } from '../../contexts/auth'

// Components
import { Route, Redirect } from 'react-router-dom'

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
