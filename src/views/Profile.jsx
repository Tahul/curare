import React from 'react'
import styled from 'styled-components'

// Components
import ProfileForm from '../components/profile/ProfileForm'
import Page from '../components/layout/Page'

const StyledProfile = styled.div``

const Profile = () => (
  <Page>
    <StyledProfile>
      <ProfileForm />
    </StyledProfile>
  </Page>
)

export default Profile
