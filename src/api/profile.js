import API from './index'

/**
 * Get a user profile (the current logged-in user if no `id`)
 *
 * @param {number | null} id
 */
export const getProfile = async (id = null) => {
  const request = await API.get(`/profiles${id ? `/${id}` : ``}`)

  return request.data
}

/**
 * Update a user profile data
 *
 * @param {first_name, last_name, description, url} profile
 */
export const updateProfile = async ({
  first_name,
  last_name,
  description,
  url,
}) => {
  const request = await API.patch(`/profiles`, {
    first_name,
    last_name,
    description,
    url,
  })

  return request.data
}

/**
 * Update a user profile avatar
 *
 * @param {File | null} avatar
 */
export const updateAvatar = async (avatar) => {
  if (avatar) {
    // Avatar isn't null, try to update the avatar accordingly
    if (!(avatar instanceof File)) {
      throw new Error('The avatar must be valid image!')
    }

    const request = await API.patch(`/profiles/avatar`, {
      avatar,
    })

    return request.data
  } else {
    // Avatar is null; remove the current avatar
    const request = await API.delete(`/profiles/avatar`)

    return request.data
  }
}
