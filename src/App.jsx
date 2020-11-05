import React from 'react'
import styled from 'styled-components'

// Hooks
import useQueryLogout from './hooks/useQueryLogout'

// Components
import { Switch } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import { AuthProvider } from './contexts/auth'
import { AnimatePresence } from 'framer-motion'
import PublicRoute from './components/utils/PrivateRoute'
import PrivateRoute from './components/utils/PublicRoute'

// Views
import Landing from './views/Landing'
import Register from './views/Register'
import Login from './views/Login'
import Profile from './views/Profile'
import Settings from './views/Settings'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 320px;
  max-width: 320px;
`

// Router switch
const Routes = () => {
  useQueryLogout()

  return (
    <AnimatePresence>
      <Switch>
        <PublicRoute restricted={true} path="/login" component={Login} />

        <PublicRoute restricted={true} path="/register" component={Register} />

        <PrivateRoute path="/profile/:id" component={Profile} />

        <PrivateRoute path="/settings" component={Settings} />

        <PublicRoute path="/" component={Landing} />
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
