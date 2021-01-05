import { Button } from '@heetch/flamingo-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../../contexts/auth'
import { logoutAction } from '../../contexts/auth/actions'
import useActionsSounds from '../../hooks/useActionsSounds'

const LogoutButton = () => {
  const { playBack } = useActionsSounds()
  const authDispatch = useAuthDispatch()
  const { loading } = useAuthState()
  const history = useHistory()

  const handleLogout = async () => {
    await logoutAction(authDispatch)

    playBack()

    // Redirect after logout
    history.push('/')
  }

  return (
    <Button
      style={{ width: '100%' }}
      onClick={handleLogout}
      isLoading={loading}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
