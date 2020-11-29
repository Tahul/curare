import { useState, useEffect, useCallback } from 'react'
import { destroy, index, store, update } from '../api/collections'

const useCollections = (userId = null) => {
  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState([])

  const getCollections = useCallback(async (id = null, isMounted = true) => {
    if (isMounted) setLoading(true)

    let collections

    try {
      collections = await index(id)

      setCollections([...collections])
    } catch (e) {
      console.log(e)
    }

    if (isMounted) setLoading(false)

    return collections
  }, [])

  const createCollection = async ({ title }) => {
    setLoading(true)

    let collection

    try {
      collection = await store({ title })

      setCollections([...collections, collection])
    } catch (e) {
      console.log(e)
    }

    setLoading(false)

    return collection
  }

  const updateCollection = async ({ id, title }) => {
    setLoading(true)

    let updatedCollection

    try {
      updatedCollection = await update({ id, title })

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

    setLoading(false)

    return updatedCollection
  }

  const deleteCollection = async ({ id }) => {
    try {
      await destroy({ id })

      setCollections(
        collections.filter((collection) => {
          return collection.id !== id
        }),
      )

      return { id }
    } catch (e) {
      console.log(e)
    }

    return false
  }

  useEffect(() => {
    let isMounted = true

    const fetchCollections = async () => {
      if (userId) {
        await getCollections(userId, isMounted)
      }
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
