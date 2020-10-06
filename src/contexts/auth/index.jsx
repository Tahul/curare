import React from 'react'

// Reducer
import authReducer from './reducer'

// Data from localStorage
const user = localStorage.getItem('curare_user')
  ? localStorage.getItem('curare_user')
  : ''

const token = localStorage.getItem('curare_token')
  ? localStorage.getItem('curare_token')
  : ''

// Default state
export const defaultState = {
  user: null || user,
  token: null || token,
  isLoggedIn: !!(user && token),
  loading: false,
  error: false,
}

// Contexts
const AuthStateContext = React.createContext()
AuthStateContext.displayName = 'AuthStateContext'
const AuthDispatchContext = React.createContext()
AuthDispatchContext.displayName = 'AuthDispatchContext'

// Provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, defaultState)

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

/**
 * useAuthState hooks
 */
const useAuthState = () => {
  const context = React.useContext(AuthStateContext)

  return context
}

/**
 * useAuthDispatch hook
 */
const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext)

  return context
}

/**
 * useAuth hook
 */
const useAuth = () => {
  return [useAuthState(), useAuthDispatch()]
}

export { AuthProvider, useAuthState, useAuthDispatch, useAuth }
