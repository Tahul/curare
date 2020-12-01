import { useState, useCallback, useEffect } from 'react'
import { destroy, index, preview, store, update } from '../api/links'

const useLinks = ({ userId = null, collectionId = null }) => {
  const [loading, setLoading] = useState(false)
  const [links, setLinks] = useState([])

  /**
   * Get all the links for the current userId.
   *
   * @param {boolean} isMounted
   */
  const getLinks = useCallback(
    async ({ isMounted = true }) => {
      if (isMounted) setLoading(true)

      let links

      try {
        if (collectionId) {
          links = await index({ collectionId })
        } else if (userId) {
          links = await index({ userId })
        }

        setLinks([...links])
      } catch (e) {
        console.log(e)
      }

      if (isMounted) setLoading(false)

      return links
    },
    [collectionId, userId],
  )

  /**
   * Create a link.
   *
   * @param {string, string} link
   */
  const createLink = async ({ url, description }) => {
    setLoading(true)

    let link

    try {
      link = await store({ url, description })

      setLinks([...links, link])
    } catch (e) {
      console.log(e)
    }

    setLoading(false)

    return link
  }

  /**
   * Update a link.
   *
   * @param {string, string} string
   */
  const updateLink = async ({ url, description }) => {
    setLoading(true)

    let updatedLink

    try {
      updatedLink = await update({ url, description })

      setLinks(
        links.map((link) => {
          if (link.id === updatedLink.id) {
            return updatedLink
          }

          return link
        }),
      )
    } catch (e) {
      console.log(e)
    }

    setLoading(false)

    return updatedLink
  }

  /**
   * Delete a link.
   *
   * @param {id} link
   */
  const deleteLink = async ({ id }) => {
    try {
      await destroy({ id })

      setLinks(
        links.filter((link) => {
          return link.id !== id
        }),
      )

      return { id }
    } catch (e) {
      console.log(e)
    }

    return false
  }

  /**
   * Get a link OpenGraph preview.
   *
   * @param {string} url
   */
  const getLinkPreview = async ({ url }) => {
    try {
      const linkPreview = await preview({ url })

      return linkPreview
    } catch (e) {
      console.log(e)
    }

    return false
  }

  useEffect(() => {
    let isMounted = true

    const fetchLinks = async () => {
      await getLinks({ isMounted })
    }

    fetchLinks()

    return () => (isMounted = false)
  }, [getLinks, userId])

  return {
    links,
    setLinks,
    getLinks,
    createLink,
    updateLink,
    deleteLink,
    getLinkPreview,
    loading,
  }
}

export default useLinks
