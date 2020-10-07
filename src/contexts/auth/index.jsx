import React from 'react'

// Reducer
import authReducer from './reducer'

// Data from localStorage
const name = localStorage.getItem('curare_name')
  ? localStorage.getItem('curare_name')
  : ''

const email = localStorage.getItem('curare_email')
  ? localStorage.getItem('curare_email')
  : ''

// Default state
export const defaultState = {
  name: null || name,
  email: null || email,
  isLoggedIn: !!(name && email),
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
