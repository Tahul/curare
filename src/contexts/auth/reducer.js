import { defaultState } from './index'

const fillLocalStorage = (name, email) => {
  localStorage.setItem('curare_name', name)
  localStorage.setItem('curare_email', email)
}

const resetLocalStorage = () => {
  localStorage.removeItem('curare_name')
  localStorage.removeItem('curare_email')
}

export default (initialState, action) => {
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
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
