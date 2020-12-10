import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'

// Hooks
import useActionsSounds from '../../hooks/useActionsSounds'

// Assets
import Fill from '../../assets/images/fill.png'

// Components
import { Card, IconButton, Text, theme, UiText } from '@heetch/flamingo-react'
import { Img } from 'react-image'
import FollowButton from '../relations/FollowButton'

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
    flex: 1;
    margin-left: ${theme.space.l};

    .fullname {
      font-weight: ${theme.fontWeight.bold};
    }

    .relation {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .followers,
      .following {
        span {
          font-weight: ${theme.fontWeight.bold};
        }
      }

      .f-Button {
        margin: 0;
      }
    }
  }

  .description {
    width: 100%;
    margin-top: ${theme.space.l};
  }
`

const Header = ({
  id,
  profile,
  loading,
  editable,
  onEdit,
  isFollowing,
  onFollow,
  onUnfollow,
}) => {
  const { playButton } = useActionsSounds()

  const fullName = `${profile.first_name || ''}${
    profile.last_name ? ' ' + profile.last_name : ''
  }`

  const name = `${profile.name}`

  const description = profile.description

  const handleEdit = () => {
    playButton()

    onEdit()
  }

  return (
    <StyledHeader>
      <div className="avatar">
        <Img
          src={profile?.avatar_url || Fill}
          alt={`${id} avatar`}
          title={`${id} avatar`}
        />

        {editable ? (
          <IconButton
            className="edit-button"
            icon="IconPen"
            onClick={handleEdit}
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

        <div className="relation">
          <div className="stats">
            <Text className="following" alt="Following" title="Following">
              <span>
                {numeral(profile.following).format(
                  profile.following > 1000 ? '0.0a' : '0a',
                )}
              </span>{' '}
              following
            </Text>

            <Text className="followers" alt="Followers" title="Followers">
              <span>
                {numeral(profile.followers).format(
                  profile.followers > 1000 ? '0.0a' : '0a',
                )}
              </span>{' '}
              followers
            </Text>
          </div>
          <div className="button">
            <FollowButton
              loading={loading}
              userId={profile.user_id}
              isFollowing={isFollowing}
              onFollow={onFollow}
              onUnfollow={onUnfollow}
            />
          </div>
        </div>
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
