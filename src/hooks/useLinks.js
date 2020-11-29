import React from 'react'

const useLinks = () => {
  const [links, setLinks] = React.useState([])

  return [links, setLinks]
}

export default useLinks
