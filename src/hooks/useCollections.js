import React from 'react'

const useCollections = () => {
  const [collections, setCollections] = React.useState([
    {
      id: 1,
      title: 'Visual',
      linksCount: 22,
      order: 0,
    },
    {
      id: 2,
      title: 'Knowledge',
      linksCount: 427,
      order: 1,
    },
    {
      id: 3,
      title: 'Medias',
      linksCount: 1967,
      order: 2,
    },
    {
      id: 4,
      title: 'Tools',
      linksCount: 427,
      order: 3,
    },
  ])

  return [collections, setCollections]
}

export default useCollections
