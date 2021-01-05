import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthState } from '../../contexts/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuthState()

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
