import API from './index'

export const index = async (userId = null) => {
  const request = await API.get(`/collections${userId ? `/${userId}` : ``}`)

  return request.data
}

export const store = async ({ title }) => {
  const request = await API.post(`/collections`, { title })

  return request.data
}

export const update = async ({ id, title }) => {
  const request = await API.patch(`/collections/${id}`, { title })

  return request.data
}

export const destroy = async ({ id }) => {
  const request = await API.delete(`/collections/${id}`)

  return request.data
}
