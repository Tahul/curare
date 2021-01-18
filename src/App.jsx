import { theme } from '@heetch/flamingo-react'
import React from 'react'
import { Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './components/layout/Navigation'
import PublicRoute from './components/utils/PrivateRoute'
import PrivateRoute from './components/utils/PublicRoute'
import { AuthProvider, useAuthState } from './contexts/auth'
import useQueryLogout from './hooks/useQueryLogout'
import Callback from './views/Callback'
import Explore from './views/Explore'
import Feed from './views/Feed'
import Landing from './views/Landing'
import Login from './views/Login'
import Profile from './views/Profile'
import Register from './views/Register'
import Settings from './views/Settings'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 420px;

  @media (max-width: 420px) {
    width: 100%;
    padding: ${theme.space.m};
  }
`

// Router switch
const Routes = () => {
  const { isLoggedIn } = useAuthState()

  useQueryLogout()

  return (
    <Switch>
      <PublicRoute restricted={true} path="/login" component={Login} />

      <PublicRoute restricted={true} path="/register" component={Register} />

      <PublicRoute restricted={true} path="/callback" component={Callback} />

      <PrivateRoute path="/profile/:id/:collectionId" component={Profile} />

      <PrivateRoute path="/profile/:id" component={Profile} />

      <PrivateRoute path="/settings" component={Settings} />

      <PrivateRoute path="/explore" component={Explore} />

      {!isLoggedIn ? (
        <PublicRoute path="/" component={Landing} />
      ) : (
        <PrivateRoute path="/" component={Feed} />
      )}
    </Switch>
  )
}

// Root app render
const App = () => {
  return (
    <AuthProvider>
      <StyledApp>
        <Navigation />

        <Routes />
      </StyledApp>
    </AuthProvider>
  )
}

export default App
