import React from 'react'
import { FixedSizeList as List } from 'react-window'
import useDimensions from 'react-use-dimensions'

import { useDeckContext } from 'hooks/useDeckContext'
import { GalleryCard } from './GalleryCard'

import { DraftArmy } from './DraftArmy'
import { SearchConsole } from './SearchConsole'

export const GalleryPage = () => {
  const { filteredDeck } = useDeckContext()
  const [ref, { height }] = useDimensions()

  return (
    <>
      <DraftArmy />
      <div>
        <SearchConsole />
      </div>
      <div style={{ maxHeight: '100vh', minHeight: '70vh' }} ref={ref}>
        {height && (
          <List
            height={height}
            itemCount={filteredDeck.length}
            itemSize={450}
            itemData={filteredDeck}
            width={'100%'}
          >
            {ListItemRenderer}
          </List>
        )}
      </div>
    </>
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
