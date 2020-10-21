import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

// Contexts
import { useAuthState } from '../contexts/auth'

// Components
import LoginForm from '../components/auth/LoginForm'
import Page from '../components/layout/Page'

const StyledLogin = styled.div``

const Login = () => {
  const { isLoggedIn } = useAuthState()
  const history = useHistory()

  if (isLoggedIn) {
    history.push('/')
  }

  return (
    <Page>
      <StyledLogin>
        <LoginForm />
      </StyledLogin>
    </Page>
  )
}

export default Login
