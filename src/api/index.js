import axios from 'axios'

export const API = (prefix = true) =>
  axios.create({
    baseURL: `${import.meta.env.SNOWPACK_PUBLIC_API_URL}${
      prefix ? import.meta.env.SNOWPACK_PUBLIC_API_PREFIX : ''
    }`,
    withCredentials: true,
  })

export default API
