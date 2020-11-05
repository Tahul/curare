import { IconButton, Text, theme, UiText } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'

// Assets
import Logo from '../../assets/images/logo.svg'

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .avatar {
    position: relative;
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${theme.color.brand.primaryLight};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;

      :not(.placeholder) {
        border-radius: 100%;
      }

      &.placeholder {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  .fullname {
    font-weight: ${theme.fontWeight.bold};
    padding: ${theme.space.m};
  }

  .edit-button {
    position: absolute;
    bottom: -0.5rem;
    right: -0.5rem;
  }
`

const Header = ({ id, profile, loading, editable, onEdit }) => {
  const fullName = `${profile.first_name || ''}${
    profile.last_name ? ' ' + profile.last_name : ''
  }`

  const name = `${profile.name}`

  return (
    <StyledHeader>
      <div className="avatar">
        {!loading && profile.avatar_url && profile.avatar_url !== '' ? (
          <img
            src={profile.avatar_url}
            alt={`${id} avatar`}
            title={`${id} avatar`}
          />
        ) : (
          <img src={Logo} alt="Curare logo" className="placeholder" />
        )}

        {editable ? (
          <IconButton className="edit-button" icon="IconPen" onClick={onEdit} />
        ) : null}
      </div>

      {fullName !== '' ? (
        <UiText className="fullname">{fullName}</UiText>
      ) : null}

      <Text className="name">@{name}</Text>
    </StyledHeader>
  )
}

export default Header
