import { useState, useEffect, useCallback } from 'react'

// API
import {
  getProfile as getRemoteProfile,
  updateProfile as updateRemoteProfile,
  updateAvatar as updateRemoteAvatar,
} from '../api/profile'

// Hooks
import useIsMounted from './useIsMounted'
import useActionsSounds from './useActionsSounds'

const initialState = {
  first_name: '',
  last_name: '',
  description: '',
  url: '',
  avatar_url: '',
}

const useProfile = (id = null) => {
  const { playSuccess, playError } = useActionsSounds()
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(initialState)

  /**
   * Get a remote profile for the hook context
   *
   * @param {*} id
   * @param {boolean} isMounted
   */
  const getProfile = useCallback(
    async ({ userId }) => {
      if (isMounted) setLoading(true)

      try {
        const remoteProfile = await getRemoteProfile({ userId })

        setProfile({ ...profile, ...remoteProfile })
      } catch (e) {
        // Mitigate this case
      }

      if (isMounted) setLoading(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMounted],
  )

  /**
   * Update the current user profile
   *
   * @param {first_name, last_name, description, url} profile
   */
  const updateProfile = async ({ first_name, last_name, description, url }) => {
    setLoading(true)

    try {
      const updatedProfile = await updateRemoteProfile({
        first_name,
        last_name,
        description,
        url,
      })

      setProfile({ ...profile, ...updatedProfile })

      playSuccess()
    } catch (e) {
      playError()
    }

    setLoading(false)
  }

  /**
   * Update the user avatar, or remove it if passing null
   *
   * @param {File | null} avatar
   */
  const updateAvatar = async (avatar = null) => {
    setLoading(true)

    try {
      const updatedProfile = await updateRemoteAvatar(avatar)

      setProfile({ ...profile, ...updatedProfile })
    } catch (e) {
      // Mitigate this case
    }

    setLoading(false)
  }

  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile({ id })
    }

    fetchProfile()
  }, [id, getProfile])

  return {
    profile,
    setProfile,
    getProfile,
    updateProfile,
    updateAvatar,
    loading,
  }
}

export default useProfile
