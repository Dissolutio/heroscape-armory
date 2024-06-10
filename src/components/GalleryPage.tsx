import React from 'react'
import { FixedSizeList as List } from 'react-window'

import { useDeckContext } from 'hooks/useDeckContext'
import { GalleryCard } from './GalleryCard'

import { DraftArmy } from './DraftArmy'
import { SearchConsole } from './SearchConsole'
import { QuickCard } from './QuickCard'

export const GalleryPage = () => {
  const { filteredDeck } = useDeckContext()

  return (
    <>
      <DraftArmy />
      <SearchConsole />
      <List
        height={1000}
        itemCount={filteredDeck.length}
        itemSize={450}
        itemData={filteredDeck}
        width={'100%'}
      >
        {ListItemRenderer}
      </List>
    </>
  )
}

const ListItemRenderer = ({ data, index, style }) => {
  const card = data[index]
  return (
    <div style={style} className={`p-1`}>
      {card && card?.name ? <QuickCard card={card} /> : <div>Loading</div>}
    </div>
  )
}
