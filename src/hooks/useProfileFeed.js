import { useState, useEffect, useCallback } from 'react'
import { getProfile as getRemoteProfile } from '../api/profile'

const initialState = {
  first_name: null,
  last_name: null,
  description: null,
  url: null,
  avatar_url: null,
  name: null,
  user_id: null,
}

const useProfileFeed = (id = null) => {
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(initialState)

  /**
   * Get a remote profile for the hook context
   *
   * @param {*} id
   * @param {boolean} isMounted
   */
  const getProfile = useCallback(async (id, isMounted = true) => {
    if (isMounted) setLoading(true)

    try {
      const remoteProfile = await getRemoteProfile(id)

      setProfile({ ...profile, ...remoteProfile })
    } catch (e) {
      // Mitigate this case
    }

    if (isMounted) setLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let isMounted = true

    const fetchProfile = async () => {
      await getProfile(id, isMounted)
    }

    fetchProfile()

    return () => (isMounted = false)
  }, [id, getProfile])

  return {
    profile,
    setProfile,
    getProfile,
    loading,
  }
}

export default useProfileFeed
