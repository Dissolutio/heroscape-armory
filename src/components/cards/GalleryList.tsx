import React from 'react'
import { FixedSizeList as List } from 'react-window'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { SearchConsole } from './SearchConsole'
import { GalleryArmyCard } from './GalleryCard'

export const GalleryList = () => {
  const { filteredDeck } = useDeckContext()
  const { darkModeBSClassNames } = useUIContext()
  return (
    <Container className={`mt-2 mb-2`}>
      <Jumbotron className={`text-center ${darkModeBSClassNames}`}>
        <h2 className={` ${darkModeBSClassNames}`}>Gallery </h2>
        <Badge variant="warning" className={`small`}>
          {filteredDeck.length} items
        </Badge>
        <SearchConsole />
      </Jumbotron>
      <Container className={`${darkModeBSClassNames} mt-2 mb-2`}>
        <List
          // useIsScrolling
          height={600}
          // className={`${darkModeBSClassNames}`}
          itemCount={filteredDeck.length}
          itemSize={400}
          itemData={filteredDeck}
          width={'100%'}
        >
          {ListItemRenderer}
        </List>
      </Container>
    </Container>
  )
}

const ListItemRenderer = ({
  data,
  // isScrolling,
  index,
  style,
}) => {
  const card = data[index]
  // if (isScrolling) {
  //   return <div style={style}>Scrolling.....</div>
  // }
  return (
    <div style={style} className={`${card.general}-frame`}>
      {card && card?.name ? (
        <GalleryArmyCard card={card} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}
