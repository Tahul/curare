import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthState } from '../contexts/auth'

// Components
import LoginForm from '../components/auth/LoginForm'

const StyledLogin = styled.div``

const Login = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <StyledLogin>
      {isLoggedIn ? <Redirect to="/profile" /> : null}

      <LoginForm />
    </StyledLogin>
  )
}

export default Login
