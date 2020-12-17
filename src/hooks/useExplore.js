import { useCallback, useEffect, useState } from 'react'
import { index as getExplore } from '../api/explore'
import useIsMounted from './useIsMounted'

const useFeed = () => {
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const [items, setItems] = useState([])

  const getExploreItems = useCallback(async () => {
    if (isMounted) setLoading(true)

    let updatedItems = [...items]

    try {
      const { data, last_page } = await getExplore({ page })

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isMounted])

  useEffect(() => {
    const fetchExplore = async () => {
      await getExploreItems()
    }

    fetchExplore()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return {
    loading,
    setLoading,
    page,
    setPage,
    items,
    setItems,
    getExplore,
    lastPage,
  }
}

export default useFeed
