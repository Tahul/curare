import API from './index'

/**
 * Get all the collections for a user.
 *
 * @param {*} userId
 */
export const index = async (userId = null) => {
  const request = await API.get(`/collections${userId ? `/${userId}` : ``}`)

  return request.data
}

/**
 * Create a collection.
 *
 * @param { title } collection
 */
export const store = async ({ title }) => {
  const request = await API.post(`/collections`, { title })

  return request.data
}

/**
 * Update a collection.
 *
 * @param {string, string} collection
 */
export const update = async ({ id, title }) => {
  const request = await API.patch(`/collections/${id}`, { title })

  return request.data
}

/**
 * Destroy a collection.
 *
 * @param { string } id
 */
export const destroy = async ({ id }) => {
  const request = await API.delete(`/collections/${id}`)

  return request.data
}

/**
 * Update a collection image.
 *
 * @param {File | null} avatar
 */
export const updateImage = async ({ id, image }) => {
  if (image) {
    // image isn't null, try to update the image accordingly
    if (!(image instanceof File)) {
      throw new Error('The image must be valid image!')
    }

    const formData = new FormData()

    formData.append('image', image)

    const request = await API.post(`/collections/${id}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return request.data
  } else {
    // image is null; remove the current avatar
    const request = await API.delete(`/collections/${id}/image`)

    return request.data
  }
}
