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
 * Create a link.
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
 * Update a link.
 *
 * @param {string, string} link
 */
export const update = async ({ id, url, ogp }) => {
  const request = await API.patch(`/links/${id}`, { url, ogp })

  return request.data
}

/**
 * Destroy a link.
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

/**
 * Increment the click count of a link.
 *
 * @param {string} id
 */
export const click = async ({ id }) => {
  const request = await API.post(`/links/${id}/click`)

  return request.data
}
