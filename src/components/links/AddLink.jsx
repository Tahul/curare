import React from 'react'
import styled from 'styled-components'

// Components
import { Input } from '@heetch/flamingo-react'
import LinkItem from './LinkItem'

// Hooks
import useIsMounted from '../../hooks/useIsMounted'

// Parse URLs
const regex = /^(?:((?:(?:https?|ftp):\/\/))|(?:www.))+(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/

// Test URLs
const isUrl = (url) => regex.test(url)

const StyledAddLink = styled.div``

const AddLink = ({ onLinkPreview, onLinkSave }) => {
  const isMounted = useIsMounted()
  const inputRef = React.useRef()
  const [loading, setLoading] = React.useState(false)
  const [preview, setPreview] = React.useState(false)

  const handleLinkChange = async (url) => {
    if (isMounted) setLoading(true)

    try {
      url = url?.target?.value

      if (url && isUrl(url)) {
        const preview = await onLinkPreview({ url })

        if (isMounted) setPreview(preview)
      } else {
        if (isMounted) setPreview(false)
      }
    } catch (e) {
      console.warn('Could not preview the following url:\n')
      console.warn(url)
    }

    if (isMounted) setLoading(false)
  }

  const handleSave = async () => {
    if (isMounted) setLoading(true)

    const previewData = { ...preview }

    try {
      const url = inputRef.current.value

      if (isMounted) setPreview(false)

      await onLinkSave({ url, ogp: previewData })

      if (inputRef?.current) inputRef.current.value = ''
    } catch (e) {
      setPreview(previewData)
    }

    if (isMounted) setLoading(false)
  }

  return (
    <StyledAddLink>
      <Input
        ref={inputRef}
        id="url"
        placeholder="Paste a new link"
        onChange={handleLinkChange}
      />

      {preview ? (
        <LinkItem
          editable
          editing
          onSave={handleSave}
          link={{ ogp: preview }}
          loading={loading}
        />
      ) : null}
    </StyledAddLink>
  )
}

export default AddLink
