import { useState, useEffect, useCallback } from 'react'
import { destroy, index, store, update } from '../api/collections'

const useCollections = (userId = null) => {
  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState([])

  const getCollections = useCallback(async (id = null, isMounted = true) => {
    if (isMounted) setLoading(true)

    try {
      setCollections([...(await index(id))])
    } catch (e) {
      console.log(e)
    }

    if (isMounted) setLoading(false)
  }, [])

  const createCollection = async ({ title }) => {
    try {
      setCollections([...collections, await store({ title })])
    } catch (e) {
      console.log(e)
    }
  }

  const updateCollection = async ({ id, title }) => {
    try {
      const updatedCollection = await update({ id, title })

      setCollections(
        collections.map((collection) => {
          if (collection.id === updatedCollection.id) {
            return updatedCollection
          }

          return collection
        }),
      )
    } catch (e) {
      console.log(e)
    }
  }

  const deleteCollection = async ({ id }) => {
    try {
      await destroy(id)

      setCollections(
        collections.filter((collection) => {
          return collection.id !== id
        }),
      )
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    let isMounted = true

    const fetchCollections = async () => {
      await getCollections(userId, isMounted)
    }

    fetchCollections()

    return () => (isMounted = false)
  }, [getCollections, userId])

  return {
    collections,
    setCollections,
    getCollections,
    createCollection,
    updateCollection,
    deleteCollection,
    loading,
  }
}

export default useCollections
