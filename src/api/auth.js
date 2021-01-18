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

// Set redirect url for both providers methods
const redirect_url = import.meta.env.SNOWPACK_PUBLIC_APP_URL + '/callback'

/**
 * Get OAuth social redirection link
 *
 * @param {*} type (twitter / github)
 */
export const getSocialRedirect = async (type = 'twitter') => {
  const request = await API.get(`/auth/social/redirect`, {
    type,
    redirect_url,
  })

  return request.data
}

/**
 * Get OAuth social callback data
 *
 * @param {*} parameters
 */
export const getSocialCallback = async (type = 'twitter', parameters = {}) => {
  const request = await API.get('/auth/social/callback', {
    ...parameters,
    redirect_url,
  })

  return request.data
}
