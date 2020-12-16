import { useCallback, useEffect, useState } from 'react'
import { index as getFeed } from '../api/feed'
import useIsMounted from './useIsMounted'

const useFeed = () => {
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const [items, setItems] = useState([])

  const getFeedItems = useCallback(async () => {
    if (isMounted) setLoading(true)

    let updatedItems = [...items]

    try {
      const { data, last_page } = await getFeed({ page })

      updatedItems = [...updatedItems, ...data].reduce((prev, curr, i) => {
        if (prev.findIndex((item) => item.id === curr.id) > -1) return prev

        return [...prev, curr]
      }, [])

      setLastPage(last_page)

      setItems([...updatedItems])
    } catch (e) {
      console.log(e)
    }

    if (isMounted) setLoading(false)
  }, [page, isMounted])

  useEffect(() => {
    const fetchFeed = async () => {
      await getFeedItems()
    }

    fetchFeed()
  }, [page])

  return {
    loading,
    setLoading,
    page,
    setPage,
    items,
    setItems,
    getFeedItems,
    lastPage,
  }
}

export default useFeed
