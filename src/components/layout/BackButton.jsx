import { Icon, Text, theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import useActionsSounds from '../../hooks/useActionsSounds'

const StyledBackButton = styled.div`
  cursor: pointer;

  .f-Text {
    display: flex;
    align-items: center;

    &:hover {
      color: ${theme.color.element.tertiary};
    }
  }

  .f-Icon {
    margin-right: ${theme.space.s};
  }
`

const BackButton = ({ onBack, children }) => {
  const { playBack } = useActionsSounds()

  const handleBack = () => {
    playBack()

    onBack()
  }

  return (
    <StyledBackButton className="backButton">
      <Text variant="contentBold" onClick={handleBack}>
        <Icon icon="IconArrowLeft" />

        {children}
      </Text>
    </StyledBackButton>
  )
}

export default BackButton
