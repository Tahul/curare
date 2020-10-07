import API from './index'

/**
 * Initialize the session token
 */
export const initialize = async () => {
  // Empty prefix as the sanctum route isn't under /api prefix
  await API.get('/sanctum/csrf-cookie')
}

/**
 * Login method
 *
 * @param {email, password}
 */
export const login = async ({ email, password }) => {
  await initialize()

  const request = await API.post('/api/auth/login', {
    name,
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

  const request = await API.post('/api/auth/register', {
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
  const request = await API.post('/api/auth/logout')

  return request.data
}
