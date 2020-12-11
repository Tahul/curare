import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Hooks
import useQueryLogout from './hooks/useQueryLogout'

// Components
import { Switch } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import { AuthProvider, useAuthState } from './contexts/auth'
import { AnimatePresence } from 'framer-motion'
import PublicRoute from './components/utils/PrivateRoute'
import PrivateRoute from './components/utils/PublicRoute'

// Views
import Landing from './views/Landing'
import Register from './views/Register'
import Login from './views/Login'
import Profile from './views/Profile'
import Settings from './views/Settings'
import Feed from './views/Feed'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 320px;
  max-width: 320px;

  @media (max-width: 320px) {
    padding: ${theme.space.m};
  }
`

// Router switch
const Routes = () => {
  const { isLoggedIn } = useAuthState()

  useQueryLogout()

  return (
    <AnimatePresence>
      <Switch>
        <PublicRoute restricted={true} path="/login" component={Login} />

        <PublicRoute restricted={true} path="/register" component={Register} />

        <PrivateRoute path="/profile/:id/:collectionId" component={Profile} />

        <PrivateRoute path="/profile/:id" component={Profile} />

        <PrivateRoute path="/settings" component={Settings} />

        {
          !isLoggedIn ? 
          <PublicRoute path="/" component={Landing} /> :
          <PrivateRoute path="/" component={Feed} />
        }
      </Switch>
    </AnimatePresence>
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
