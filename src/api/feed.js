import API from './index'

/**
 * Get the paginated feed data for the currently logged in user.
 *
 * @param {number} page
 */
export const index = async ({ page = null }) => {
  const request = await API.get(`feed${page ? `?page=${page}` : ``}`)

  return request.data
}
