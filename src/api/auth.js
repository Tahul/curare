import API from './index'

/**
 * Initialize the session token
 */
export const initialize = async () => await API.get('/csrf-cookie')

/**
 * Login method
 *
 * @param {email, password}
 */
export const login = async ({ email, password }) => {
  await initialize()

  const request = await API.post('/auth/login', {
    email,
    password,
  })

  return request.data
}

/**
 * Register method
 *
 * @param {email, password}
 */
export const register = async ({ name, email, password }) => {
  await initialize()

  const request = await API.post('/auth/register', {
    name,
    email,
    password,
  })

  return request.data
}

/**
 * Logout method
 */
export const logout = async () => {
  const request = await API.post('/auth/logout')

  return request.data
}
