import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Hooks
import { useAuth, useAuthState } from '../../contexts/auth'
import useSound from 'use-sound'

// Components
import { Button, IconButton, theme } from '@heetch/flamingo-react'
import { Link } from 'react-router-dom'

// Assets
import buttonSfx from '../../assets/sounds/button.wav'

const StyledActions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    a {
      margin-left: ${theme.space.m};
    }
  }
`

const AnimateActions = ({ children }) => (
  <motion.div
    initial={{ opacity: 0.25, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
  >
    {children}
  </motion.div>
)

const GuestActions = () => (
  <AnimateActions>
    <Link to="/login" tabIndex={0}>
      <Button>Login</Button>
    </Link>

    <Link to="/register" tabIndex={1}>
      <Button>Register</Button>
    </Link>
  </AnimateActions>
)

const LoggedInActions = () => {
  const [play] = useSound(buttonSfx, {
    volume: 0.25,
  })

  const [auth] = useAuth()

  return (
    <AnimateActions>
      <Link to={`/profile/${auth.name}`} tabIndex={0} onClick={play}>
        <IconButton icon="IconUser" />
      </Link>

      <Link to="/settings" tabIndex={1} onClick={play}>
        <IconButton icon="IconGear" />
      </Link>
    </AnimateActions>
  )
}

const Actions = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <StyledActions>
      {isLoggedIn ? <LoggedInActions /> : <GuestActions />}
    </StyledActions>
  )
}

export default Actions
