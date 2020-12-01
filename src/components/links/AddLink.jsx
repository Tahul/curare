import { Input, InputField } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'

const StyledAddLink = styled.div``

const AddLink = () => {
  return (
    <StyledAddLink>
      <Input placeholder="Paste a new link" />
    </StyledAddLink>
  )
}

export default AddLink
