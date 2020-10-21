import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

// Contexts
import { useAuthState } from '../contexts/auth'

// Components
import LoginForm from '../components/auth/LoginForm'

const StyledLogin = styled.div``

const Login = () => {
  const { isLoggedIn } = useAuthState()
  const history = useHistory()

  if (isLoggedIn) {
    history.push('/')
  }

  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  )
}

export default Login
