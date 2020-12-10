import { useState, useEffect, useCallback } from 'react'
import {
  destroy,
  index,
  show,
  store,
  update,
  updateImage as updateRemoteImage,
} from '../api/collections'

// Hooks
import useActionsSounds from './useActionsSounds'

// Hooks
import useIsMounted from './useIsMounted'

const useCollections = (userId = null) => {
  const { playSuccess, playError } = useActionsSounds()
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState([])

  /**
   * Get all the collections for the current userId.
   */
  const getCollections = useCallback(
    async ({ userId = null }) => {
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
    [isMounted],
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

      playSuccess()
    } catch (e) {
      playError()
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

      playSuccess()
    } catch (e) {
      playError()
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

      playSuccess()

      return { id }
    } catch (e) {
      playError()
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

  /**
   * Get a single entity and refresh it from the local list.
   *
   * @param {string} id
   */
  const refreshCollection = async ({ id }) => {
    setLoading(true)

    let updatedCollection

    try {
      updatedCollection = await show({ id })

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
    const fetchCollections = async () => {
      if (userId) {
        await getCollections({ userId })
      }
    }

    fetchCollections()
  }, [getCollections, userId])

  return {
    collections,
    setCollections,
    getCollections,
    createCollection,
    updateCollection,
    deleteCollection,
    updateCollectionImage,
    refreshCollection,
    loading,
  }
}

export default useCollections
