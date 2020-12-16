import React from 'react'
import styled from 'styled-components'

// Hooks
import useFeed from '../hooks/useFeed'

// Components
import Page from '../components/layout/Page'
import { AnimatePresence } from 'framer-motion'
import FeedItem from '../components/feed/FeedItem'
import Loader from '../components/utils/Loader'

const StyledFeed = styled.div``

const Feed = () => {
  const { items, getFeedItems, page, setPage, loading, lastPage } = useFeed()

  const handleNextPage = () => {
    setPage(page + 1)

    getFeedItems()

    console.log({ page })
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
            />
          </ul>
        ) : null}
      </StyledFeed>
    </Page>
  )
}

export default Feed
