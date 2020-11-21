import React from 'react'

const useCollections = () => {
  const [collections, setCollections] = React.useState([
    {
      id: 1,
      title: 'Visual',
      slug: 'visual',
      linksCount: 22,
      order: 0,
    },
    {
      id: 2,
      title: 'Knowledge',
      slug: 'knowledge',
      linksCount: 427,
      order: 1,
    },
    {
      id: 3,
      title: 'Medias',
      slug: 'medias',
      linksCount: 1967,
      order: 2,
    },
    {
      id: 4,
      title: 'Tools',
      slug: 'tools',
      linksCount: 427,
      order: 3,
    },
  ])

  return [collections, setCollections]
}

export default useCollections
