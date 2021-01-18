import { Card, Spinner, Text, theme } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import CallbackIllustration from '../components/illustrations/CallbackIllustration'
import Page from '../components/layout/Page'

const StyledCallback = styled.div`
  p {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`

const Callback = () => {
  const route = useLocation()
  const search = route.search

  console.log(search)

  return (
    <Page>
      <StyledCallback>
        <CallbackIllustration />

        <motion.div
          initial={{ y: 75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Card>
            <Text>
              Loading your account data
              <Spinner style={{ marginLeft: theme.space.m }} />
            </Text>
          </Card>
        </motion.div>
      </StyledCallback>
    </Page>
  )
}

export default Callback
