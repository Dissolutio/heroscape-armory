import React from 'react'
import { FixedSizeList as List } from 'react-window'

import { useDeckContext } from 'hooks/useDeckContext'
import { GalleryArmyCard } from './GalleryCard'

export const ReactWindowFixedSizeList = () => {
  const { filteredDeck } = useDeckContext()
  return (
    <List
      height={600}
      itemCount={filteredDeck.length}
      itemSize={400}
      itemData={filteredDeck}
      width={'100%'}
    >
      {ListItemRenderer}
    </List>
  )
}

const ListItemRenderer = ({ data, index, style }) => {
  const card = data[index]
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
