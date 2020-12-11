import React from 'react'
import toast from 'toasted-notes'
import styled from 'styled-components'

// Components
import { Alert, theme } from '@heetch/flamingo-react'

const defaultOptions = {
  position: 'bottom',
  duration: 20000,
}

const StyledAlert = styled.div`
  max-width: 320px;
  padding: ${theme.space.l} 0;

  .f-Alert {
    min-width: 320px;
    max-width: 320px;

    @media (max-width: 320px) {
      min-width: 310px;
      max-width: 310px;
    }
  }
`

const AlertComponent = ({ title, message, type, onClose }) => (
  <StyledAlert>
    <Alert title={title} type={type} onClose={onClose}>
      {message}
    </Alert>
  </StyledAlert>
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
