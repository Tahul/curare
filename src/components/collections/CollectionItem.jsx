import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Components
import { Button, Item, Text, theme, UiText } from '@heetch/flamingo-react'

// Hooks
import useIsMounted from '../../hooks/useIsMounted'
import useActionsSounds from '../../hooks/useActionsSounds'

// Assets
import Fill from '../../assets/images/fill.png'

const StyledCollectionItem = styled.div`
  position: relative;
  margin-top: ${theme.space.l};

  .itemContent {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: ${theme.space.l};
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .actions {
    position: absolute;
    margin-top: calc(0rem - ${theme.space.xl});
    right: ${theme.space.xl};
    display: flex;

    div {
      margin-left: ${theme.space.m};
    }
  }
`
const item = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: { opacity: 0.25, y: 100 },
}

const CollectionItem = ({
  collection,
  i,
  onClick,
  icon = 'IconArrowRight',
  valueText = '',
  selected = false,
  onEdit,
  onDelete,
  editable,
  loading,
  ...props
}) => {
  const isMounted = useIsMounted()
  const { playButton } = useActionsSounds()
  const [isDeleting, setIsDeleting] = React.useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick(collection, i)
    }
  }

  const handleDelete = () => {
    if (isDeleting) {
      return onDelete({ id: collection.id })
    } else {
      setIsDeleting(true)

      setTimeout(() => {
        if (isMounted) setIsDeleting(false)
      }, 1000)
    }
  }

  return (
    <motion.li
      {...props}
      custom={i}
      animate="visible"
      variants={item}
      whileHover={!selected ? { scale: 1.03 } : null}
      whileTap={!selected ? { scale: 1 } : null}
      onClick={!selected ? playButton : null}
    >
      <StyledCollectionItem className={{ selected }}>
        <Item
          onClick={handleClick}
          valueIcon={icon || undefined}
          value={valueText}
        >
          <div className="itemContent">
            <img
              src={collection?.image_url || Fill}
              alt={collection.title}
              title={collection.title}
            />

            <div className="textContent">
              <UiText variant="contentBold">{collection.title}</UiText>
              <Text type="subContent">
                {collection.links_count > 0
                  ? `${collection.links_count} links`
                  : 'No links yet'}
              </Text>
            </div>
          </div>

          {selected && editable ? (
            <div className="actions">
              <Button isLoading={loading} onClick={onEdit}>
                Edit
              </Button>

              <Button isLoading={loading} onClick={handleDelete}>
                {isDeleting ? 'Sure?' : 'Delete'}
              </Button>
            </div>
          ) : null}
        </Item>
      </StyledCollectionItem>
    </motion.li>
  )
}

export default CollectionItem
