import API from './index'

/**
 * Get the paginated explore data for the currently logged in user.
 *
 * @param {number} page
 */
export const index = async ({ page = null }) => {
  const request = await API.get(`explore${page ? `?page=${page}` : ``}`)

  return request.data
}
