import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import LoginForm from '../components/auth/LoginForm'
import Page from '../components/layout/Page'
import { useAuthState } from '../contexts/auth'

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
