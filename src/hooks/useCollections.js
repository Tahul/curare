import { useState, useEffect, useCallback } from 'react'
import {
  destroy,
  index,
  store,
  update,
  updateImage as updateRemoteImage,
} from '../api/collections'

const useCollections = (userId = null) => {
  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState([])

  /**
   * Get all the collections for the current userId.
   */
  const getCollections = useCallback(
    async ({ userId = null, isMounted = true }) => {
      if (isMounted) setLoading(true)

      let collections

      try {
        collections = await index({ userId })

        setCollections([...collections])
      } catch (e) {
        console.log(e)
      }

      if (isMounted) setLoading(false)

      return collections
    },
    [],
  )

  /**
   * Create a collection.
   *
   * @param {string} collection
   */
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

  /**
   * Update a collection.
   *
   * @param {string, string} collection
   */
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

  /**
   * Delete a collection.
   *
   * @param {id} collection
   */
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

  /**
   * Update the collection image, or remove it if passing null
   *
   * @param {File | null} image
   */
  const updateCollectionImage = async ({ id, image = null }) => {
    setLoading(true)

    let updatedCollection

    try {
      updatedCollection = await updateRemoteImage({ id, image })

      setCollections([
        ...collections.filter((collection) => collection.id !== id),
        updatedCollection,
      ])
    } catch (e) {
      // Mitigate this case
    }

    setLoading(false)

    return updatedCollection
  }

  useEffect(() => {
    let isMounted = true

    const fetchCollections = async () => {
      if (userId) {
        await getCollections({ userId, isMounted })
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
    updateCollectionImage,
    loading,
  }
}

export default useCollections
