import React from 'react'
import { FixedSizeList as List } from 'react-window'

import { useDeckContext } from 'hooks/useDeckContext'
import { GalleryCard } from './GalleryCard'
import { shuffleArray } from 'utils'

export const ReactWindowFixedSizeList = () => {
  const { filteredDeck } = useDeckContext()
  const shuffledDeck = shuffleArray(filteredDeck)

  return (
    <List
      height={600}
      itemCount={shuffledDeck.length}
      itemSize={450}
      itemData={shuffledDeck}
      width={'100%'}
    >
      {ListItemRenderer}
    </List>
  )
}

const ListItemRenderer = ({ data, index, style }) => {
  const card = data[index]
  return (
    <div style={style} className={`p-1`}>
      {card && card?.name ? <GalleryCard card={card} /> : <div>Loading</div>}
    </div>
  )
}
