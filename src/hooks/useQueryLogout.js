import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuthDispatch } from '../contexts/auth'
import { forceLogout } from '../contexts/auth/actions'

const useQueryLogout = () => {
  const history = useHistory()
  const location = useLocation()
  const authDispatch = useAuthDispatch()

  React.useEffect(() => {
    if (location && location.search) {
      if (location.search === '?logout=true') {
        forceLogout(authDispatch)

        history.push(location.pathname)
      }
    }
  }, [location, authDispatch, history])
}

export default useQueryLogout
