import React from 'react'

const useLinks = () => {
  const [links, setLinks] = React.useState([
    {
      id: 1,
      url: 'https://www.artstation.com/otoke',
      site_name: 'ArtStation',
      title: 'Mawa Setiawan',
      image:
        'https://cdnb.artstation.com/p/assets/images/images/028/584/021/small/mawa-setiawan-egehhehe.jpg?1594891129',
      description:
        'i have been change my primarry email to mawasetiawan1@gmail.com please email me here',
      type: 'website',
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

  return [links, setLinks]
}

export default useLinks
