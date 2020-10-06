export default (initialState, action) => {
  switch (action.type) {
    case 'START_AUTH':
      return {
        ...initialState,
        loading: true,
        error: false,
      }
    case 'SUCCESS_AUTH':
      localStorage.setItem('curare_user', action.payload.user)
      localStorage.setItem('curare_token', action.payload.token)

      return {
        ...initialState,
        ...action.payload,
        loading: false,
        isLoggedIn: true,
      }
    case 'FAILED_AUTH':
      localStorage.removeItem('curare_user')
      localStorage.removeItem('curare_token')

      return {
        ...initialState,
        ...action.payload,
        loading: false,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
