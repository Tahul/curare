import { API } from './index'

/**
 * Initialize the session token
 */
export const initialize = async () => {
  // Empty prefix as the sanctum route isn't under /api prefix
  await API(false).get('/sanctum/csrf-cookie')
}

/**
 * Login method
 *
 * @param {email, password}
 */
export const login = async ({ email, password }) => {
  await initialize()

  const request = await API().post('/auth/login', {
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
export const register = async ({ email, password }) => {
  const request = await API().post('/auth/register', {
    email,
    password,
  })

  return request.data
}
