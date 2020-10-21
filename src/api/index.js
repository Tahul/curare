import axios from 'axios'
import Toasts from '../plugins/toasts'

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/api'
      : import.meta.env.SNOWPACK_PUBLIC_API_URL,
  withCredentials: true,
})

API.interceptors.response.use(
  // Success
  (response) => {
    if (response && response.data) {
      const { data } = response

      if (data.message) {
        Toasts.Success('Success', data.message, {
          killer: true,
        })

        delete data['message']
      }
    }

    return response
  },
  // Error
  (error) => {
    if (error && error.response && error.response.data) {
      const { data } = error.response

      // Default message key on server errors
      if (data.message) {
        Toasts.Error('Error', data.message, {
          killer: true,
        })
      }

      // Show each validation errors
      if (data.errors && Object.keys(data.errors).length > 0) {
        Object.entries(data.errors).forEach((item) => {
          Toasts.Error('Error', item[1])
        })
      }
    }
  },
)

export default API
