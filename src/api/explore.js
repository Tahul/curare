import API from './index'

/**
 * Get the paginated explore data for the currently logged in user.
 *
 * @param {number} page
 */
export const index = async ({ page = null, type = 'newcomers' }) => {
  const request = await API.get(
    `explore?type=${type}${page ? `&page=${page}` : ``}`,
  )

  return request.data
}
