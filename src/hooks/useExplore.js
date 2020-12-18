import { useCallback, useEffect, useState } from 'react'
import { index as getExplore } from '../api/explore'
import useIsMounted from './useIsMounted'

const useExplore = () => {
  const isMounted = useIsMounted()
  const [currentTab, setCurrentTab] = useState('newcomers')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const [items, setItems] = useState([])

  const resetExplore = () => {
    setLoading(false)

    setPage(1)

    setLastPage(null)

    setItems([])
  }

  const getExploreItems = useCallback(async () => {
    if (isMounted) setLoading(true)

    let updatedItems = [...items]

    try {
      const { data, last_page } = await getExplore({ page, type: currentTab })

      updatedItems = [...updatedItems, ...data].reduce((prev, curr, i) => {
        if (prev.findIndex((item) => item.user_id === curr.user_id) > -1)
          return prev

        return [...prev, curr]
      }, [])

      setLastPage(last_page)

      setItems([...updatedItems])
    } catch (e) {
      console.log(e)
    }

    if (isMounted) setLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isMounted, currentTab])

  const handleTabChange = async (tab) => {
    resetExplore()

    setCurrentTab(tab)
  }

  useEffect(() => {
    const fetchExplore = async () => {
      await getExploreItems()
    }

    fetchExplore()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab, page])

  return {
    loading,
    setLoading,
    page,
    setPage,
    items,
    setItems,
    getExploreItems,
    resetExplore,
    lastPage,
    currentTab,
    setCurrentTab,
    handleTabChange,
  }
}

export default useExplore
