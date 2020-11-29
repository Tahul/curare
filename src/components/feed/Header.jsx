import { Card, IconButton, Text, theme, UiText } from '@heetch/flamingo-react'
import React from 'react'
import { ImageState, LazyImageFull } from 'react-lazy-images'
import styled from 'styled-components'

// Assets
import Logo from '../../assets/images/logo.svg'

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

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

    .edit-button {
      margin-top: ${theme.space.l};
      position: absolute;
      bottom: -0.5rem;
      right: -0.5rem;
    }
  }

  .infos {
    margin-left: ${theme.space.l};

    .fullname {
      font-weight: ${theme.fontWeight.bold};
    }

    .followers,
    .following {
      span {
        font-weight: ${theme.fontWeight.bold};
      }
    }
  }

  .description {
    width: 100%;
    margin-top: ${theme.space.xl};
  }
`

const Header = ({ id, profile, loading, editable, onEdit }) => {
  const fullName = `${profile.first_name || ''}${
    profile.last_name ? ' ' + profile.last_name : ''
  }`

  const name = `${profile.name}`

  const description = profile.description

  return (
    <StyledHeader>
      <div className="avatar">
        <LazyImageFull
          src={profile?.avatar_url || Logo}
          alt={`${id} avatar`}
          title={`${id} avatar`}
        >
          {({ imageProps, imageState, ref }) => (
            <img // eslint-disable-line
              {...imageProps}
              ref={ref}
              src={
                imageState === ImageState.LoadSuccess ? imageProps.src : Logo
              }
            />
          )}
        </LazyImageFull>

        {editable ? (
          <IconButton
            className="edit-button"
            icon="IconPen"
            onClick={onEdit}
            variant="minimal"
            intent="primary"
          />
        ) : null}
      </div>

      <div className="infos">
        {fullName !== '' ? (
          <UiText className="fullname" alt="Full name" title={fullName}>
            {fullName}
          </UiText>
        ) : null}

        <Text className="name" alt="Username" title={name}>
          @{name}
        </Text>

        <Text className="following" alt="Following" title="Following">
          <span>{profile.following}</span> following
        </Text>

        <Text className="followers" alt="Followers" title="Followers">
          <span>{profile.followers}</span> followers
        </Text>
      </div>

      <Card className="description" size="s">
        <Text alt="Description" title={description}>
          {description && description !== ''
            ? description
            : 'No description yet.'}
        </Text>
      </Card>
    </StyledHeader>
  )
}

export default Header
