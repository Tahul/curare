import API from './index'

/**
 * Get all the links for a user and/or a collection.
 *
 * @param {string, string} userId
 */
export const index = async ({ userId = null, collectionId = null }) => {
  const request = await API.get(
    `/links${collectionId ? `?collectionId=${collectionId}` : ``}${
      userId ? `?userId=${userId}` : ``
    }`,
  )

  return request.data
}

/**
 * Create a collection.
 *
 * @param {title} collection
 */
export const store = async ({ url, ogp, collection_id }) => {
  const request = await API.post(`/links`, {
    url,
    ogp,
    collection_id,
  })

  return request.data
}

/**
 * Update a collection.
 *
 * @param {string, string} collection
 */
export const update = async ({ id, url, description }) => {
  const request = await API.patch(`/links/${id}`, { url, description })

  return request.data
}

/**
 * Destroy a collection.
 *
 * @param {string} id
 */
export const destroy = async ({ id }) => {
  const request = await API.delete(`/links/${id}`)

  return request.data
}

/**
 * Preview a link OpenGraph data.
 *
 * @param {string} url
 */
export const preview = async ({ url }) => {
  const request = await API.get(`/links/preview?url=${url}`)

  return request.data
}
