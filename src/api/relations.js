import API from './index'

/**
 * Follow a user.
 *
 * @param { string } userId
 */
export const follow = async ({ userId }) => {
  const request = await API.post(`/social/following/${userId}`)

  return request.data
}

/**
 * Unfollow a user.
 *
 * @param { string } userId
 */
export const unfollow = async ({ userId }) => {
  const request = await API.delete(`/social/following/${userId}`)

  return request.data
}

/**
 * Get the followers for a user, or the current logged in user.
 *
 * @param {string|null} userId
 */
export const followers = async ({ userId = null }) => {
  const request = await API.get(
    `/social/followers${userId ? `/${userId}` : ``}`,
  )

  return request.data
}

/**
 * Get the following for a user, or the current logged in user.
 *
 * @param {string|null} userId
 */
export const following = async ({ userId = null }) => {
  const request = await API.get(
    `/social/following${userId ? `/${userId}` : ``}`,
  )

  return request.data
}
