import React from 'react'

// Contexts
import { useAuthDispatch } from '../../contexts/auth'
import { logoutAction } from '../../contexts/auth/actions'

// Components
import { Button } from '@heetch/flamingo-react'

export default () => {
  const authDispatch = useAuthDispatch()

  const handleLogout = async () => {
    await logoutAction(authDispatch)
  }

  return (
    <Button style={{ width: '100%' }} onClick={handleLogout}>
      Logout
    </Button>
  )
}
