import React from 'react'
import styled from 'styled-components'

// Components
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/layout/Navigation'

// Views
import Landing from './views/Landing'
import Register from './views/Register'
import Login from './views/Login'
import Profile from './views/Profile'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 320px;
  max-width: 320px;
`

// Router switch
const Routes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>

    <Route path="/profile">
      <Profile />
    </Route>

    <Route path="/settings">
      <Profile />
    </Route>

    <Route path="/">
      <Landing />
    </Route>
  </Switch>
)

// Root app render
const App = () => {
  return (
    <StyledApp>
      <Navigation />

      <Routes />
    </StyledApp>
  )
}

export default App
