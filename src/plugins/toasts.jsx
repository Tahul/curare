import React from 'react'
import toast from 'toasted-notes'

// Components
import { Alert } from '@heetch/flamingo-react'

const defaultOptions = {
  position: 'bottom',
  timeout: 2000,
}

const AlertComponent = ({ title, message, type, onClose }) => (
  <Alert
    title={title}
    type={type}
    onClose={onClose}
    style={{ cursor: 'pointer', width: '320px', maxWidth: '320px' }}
  >
    {message}
  </Alert>
)

export const Toast = () => {}

Toast.Information = (title, message, options = {}) => {
  if (options && options.killer) {
    toast.closeAll()
  }

  toast.notify(
    ({ onClose }) =>
      AlertComponent({ title, message, type: 'information', onClose }),
    {
      ...defaultOptions,
      ...options,
    },
  )
}

Toast.Success = (title, message, options = {}) => {
  if (options && options.killer) {
    toast.closeAll()
  }

  toast.notify(
    ({ onClose }) =>
      AlertComponent({ title, message, type: 'success', onClose }),
    {
      ...defaultOptions,
      ...options,
    },
  )
}

Toast.Error = (title, message, options = {}) => {
  if (options && options.killer) {
    toast.closeAll()
  }

  toast.notify(
    ({ onClose }) => AlertComponent({ title, message, type: 'error', onClose }),
    {
      ...defaultOptions,
      ...options,
    },
  )
}

Toast.CloseAll = toast.CloseAll

export default Toast
