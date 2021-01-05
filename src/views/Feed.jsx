import { Text } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import FeedItem from '../components/feed/FeedItem'
import Page from '../components/layout/Page'
import Loader from '../components/utils/Loader'
import useFeed from '../hooks/useFeed'

const StyledFeed = styled.div``

const Feed = () => {
  const { items, page, setPage, loading, lastPage } = useFeed()

  const handleNextPage = () => {
    setPage(page + 1)
  }

  return (
    <Page animated={false}>
      <StyledFeed>
        {items && items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <FeedItem key={item.id} item={item} />
            ))}

            <Loader
              lastPage={lastPage}
              page={page}
              loading={loading}
              onLoad={handleNextPage}
            >
              <Text>
                You reached the end of your feed&nbsp;
                <span role="img" alt="Confettis">
                  🎉
                </span>
              </Text>
            </Loader>
          </ul>
        ) : null}
      </StyledFeed>
    </Page>
  )
}

export default Feed
