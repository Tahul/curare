import { defaultState } from './index'

/**
 * Fill the localStorage with auth parameters
 * @param {*} name
 * @param {*} email
 */
const fillLocalStorage = (name, email) => {
  localStorage.setItem('curare_name', name)
  localStorage.setItem('curare_email', email)
}

/**
 * Clean the localStorage auth parameters
 */
const resetLocalStorage = () => {
  localStorage.removeItem('curare_name')
  localStorage.removeItem('curare_email')
}

const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'START_AUTH':
      return {
        ...initialState,
        loading: true,
        error: false,
      }
    case 'SUCCESS_AUTH':
      fillLocalStorage(action.payload.name, action.payload.email)

      return {
        ...initialState,
        ...action.payload,
        loading: false,
        isLoggedIn: true,
      }
    case 'FAILED_AUTH':
      resetLocalStorage()

      return {
        ...initialState,
        ...action.payload,
        loading: false,
      }
    case 'RESET_AUTH':
      resetLocalStorage()

      return {
        ...defaultState,
        isLoggedIn: false,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default AuthReducer
