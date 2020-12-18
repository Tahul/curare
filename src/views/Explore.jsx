import { Text } from '@heetch/flamingo-react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import UserProfile from '../components/explore/UserProfile'

// Components
import Page from '../components/layout/Page'
import Loader from '../components/utils/Loader'
import Tabs from '../components/utils/Tabs'

// Hooks
import useExplore from '../hooks/useExplore'

const ExploreStyled = styled.div``

const Explore = () => {
  const {
    items,
    page,
    setPage,
    loading,
    lastPage,
    currentTab,
    handleTabChange,
  } = useExplore()

  const handleNextPage = async () => {
    setPage(page + 1)
  }

  return (
    <Page animated={false}>
      <ExploreStyled>
        <Tabs
          loading={loading}
          currentValue={currentTab}
          onChange={handleTabChange}
          tabs={[
            {
              name: 'Newcomers',
              icon: 'IconPlus',
              value: 'newcomers',
            },
            {
              name: 'Most followed',
              icon: 'IconStar',
              value: 'mostfollowed',
            },
          ]}
        />

        {currentTab === 'newcomers' && (
          <ul>
            {items.map((profile) => (
              <UserProfile key={profile.user_id} profile={profile} />
            ))}
          </ul>
        )}

        {currentTab === 'mostfollowed' && (
          <ul>
            {items.map((profile) => (
              <UserProfile key={profile.user_id} profile={profile} />
            ))}
          </ul>
        )}

        <Loader
          lastPage={lastPage}
          page={page}
          loading={loading}
          onLoad={handleNextPage}
        >
          <Text>
            You reached the end of{' '}
            {currentTab === 'newcomers' ? 'newcomers' : 'most followed users'}
            &nbsp;
            <span role="img" alt="Confettis">
              🎉
            </span>
          </Text>
        </Loader>
      </ExploreStyled>
    </Page>
  )
}

export default Explore
