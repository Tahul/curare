import React from 'react'
import styled from 'styled-components'

// Components
import Page from '../components/layout/Page'

// Hooks
import useExplore from '../hooks/useExplore'

const ExploreStyled = styled.div``

const Explore = () => {
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

  return (
    <Page>
      <ExploreStyled>Explore</ExploreStyled>
    </Page>
  )
}

export default Explore
