import React from 'react'

// Hooks
import { useHistory } from 'react-router-dom'

// Contexts
import { useAuthDispatch } from '../../contexts/auth'
import { logoutAction } from '../../contexts/auth/actions'

// Components
import { Button } from '@heetch/flamingo-react'

export default () => {
  const authDispatch = useAuthDispatch()
  const history = useHistory()

  const handleLogout = async () => {
    await logoutAction(authDispatch)

    // Redirect after logout
    history.push('/')
  }

  return (
    <Button style={{ width: '100%' }} onClick={handleLogout}>
      Logout
    </Button>
  )
}
