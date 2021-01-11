import { theme } from '@heetch/flamingo-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import Main from '../components/landing/Main'
import Secondary from '../components/landing/Secondary'
import Tertiary from '../components/landing/Tertiary'
import Page from '../components/layout/Page'
import useIsMounted from '../hooks/useIsMounted'

const StyledLanding = styled.div`
  .landingPart {
    .catchLine {
      width: 100%;
      text-align: center;

      p {
        font-size: ${theme.fontSize.xxl};
        line-height: ${theme.fontSize.xxl};
        font-weight: ${theme.fontWeight.bold};
        color: ${theme.color.text.primary};
      }

      p:first-child {
        margin-top: ${theme.space.xxl};
      }
    }

    .f-Card {
      p {
        &:not(:first-child) {
          margin-top: ${theme.space.m};
        }
      }
    }
  }
`

const Landing = () => {
  const isMounted = useIsMounted()
  const pages = ['main', 'secondary', 'tertiary']
  const [currentPage, setCurrentPage] = useState(0)

  const onPrevious = (event) => {
    if (currentPage - 1 >= 0 && isMounted) setCurrentPage(currentPage - 1)
    else if (isMounted) setCurrentPage(pages.length - 1)
  }

  const onNext = (event) => {
    if (currentPage + 1 < pages.length && isMounted)
      setCurrentPage(currentPage + 1)
    else if (isMounted) setCurrentPage(0)
  }

  return (
    <Page>
      <StyledLanding>
        {pages[currentPage] === 'main' && (
          <Main onPrevious={onPrevious} onNext={onNext} />
        )}

        {pages[currentPage] === 'secondary' && (
          <Secondary onPrevious={onPrevious} onNext={onNext} />
        )}

        {pages[currentPage] === 'tertiary' && (
          <Tertiary onPrevious={onPrevious} onNext={onNext} />
        )}
      </StyledLanding>
    </Page>
  )
}

export default Landing
