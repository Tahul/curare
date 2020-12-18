import { Text } from '@heetch/flamingo-react'
import React, { useState } from 'react'
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
  const [currentTab, setCurrentTab] = useState('newcomers')
  const {
    items,
    getExploreItems,
    page,
    setPage,
    loading,
    lastPage,
  } = useExplore()

  const handleNextPage = () => {
    setPage(page + 1)

    getExploreItems()
  }

  const handleTabChange = (tab) => {
    setCurrentTab(tab)
  }

  return (
    <Page animated={false}>
      <ExploreStyled>
        <Tabs
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

        {items && items.length > 0 ? (
          <ul>
            {items.map((profile, i) => (
              <UserProfile key={profile.user_id} i={i} profile={profile} />
            ))}

            <Loader
              lastPage={lastPage}
              page={page}
              loading={loading}
              onLoad={handleNextPage}
            >
              <Text>
                You reached the end of new users&nbsp;
                <span role="img" alt="Confettis">
                  🎉
                </span>
              </Text>
            </Loader>
          </ul>
        ) : null}
      </ExploreStyled>
    </Page>
  )
}

export default Explore
