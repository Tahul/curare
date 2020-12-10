import { useState } from 'react'

import { follow, unfollow, followings, followers } from '../api/relations'
import useActionsSounds from './useActionsSounds'
import useIsMounted from './useIsMounted'

const useRelations = ({ setProfile }) => {
  const { playSuccess, playError } = useActionsSounds()
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [userFollowers, setUserFollowers] = useState([])
  const [userFollowings, setUserFollowings] = useState([])

  /**
   * Follow a user.
   *
   * @param {string} userId
   */
  const followUser = async ({ userId }) => {
    if (isMounted) setLoading(true)

    try {
      const { followed_profile } = await follow({ userId })

      setProfile(followed_profile)

      playSuccess()
    } catch (e) {
      console.log(e)

      playError()
    }

    if (isMounted) setLoading(false)
  }

  /**
   * Unfollow a user.
   *
   * @param {string} userId
   */
  const unfollowUser = async ({ userId }) => {
    if (isMounted) setLoading(true)

    try {
      const { followed_profile } = await unfollow({ userId })

      setProfile(followed_profile)

      playSuccess()
    } catch (e) {
      console.log(e)

      playError()
    }

    if (isMounted) setLoading(false)
  }

  /**
   * Get a user followers.
   *
   * @param {string} userId
   */
  const getUserFollowers = async ({ userId }) => {
    if (isMounted) setLoading(true)

    try {
      setUserFollowers(await followers({ userId }))
    } catch (e) {
      console.log(e)
    }

    if (isMounted) setLoading(false)
  }

  /**
   * Get a user following.
   *
   * @param {*} param0
   */
  const getUserFollowings = async ({ userId }) => {
    if (isMounted) setLoading(true)

    try {
      setUserFollowings(await followings({ userId }))
    } catch (e) {
      console.log(e)
    }

    if (isMounted) setLoading(true)
  }

  return {
    loading,
    followUser,
    unfollowUser,
    getUserFollowers,
    getUserFollowings,
    userFollowers,
    userFollowings,
  }
}

export default useRelations
