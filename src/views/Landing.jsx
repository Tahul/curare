import React from 'react'
import styled from 'styled-components'

// Components
import { Card, Text } from '@heetch/flamingo-react'
import Page from '../components/layout/Page'

const StyledLanding = styled.div``

const Landing = () => (
  <Page>
    <StyledLanding>
      <Card>
        <Text>Landing page</Text>
      </Card>
    </StyledLanding>
  </Page>
)

export default Landing
