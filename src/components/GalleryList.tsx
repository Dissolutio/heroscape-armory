import React from 'react'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { SearchConsole } from './SearchConsole'
import { ReactWindowFixedSizeList } from './ReactWindowFixedSizeList'

export const GalleryList = () => {
  const { filteredDeck } = useDeckContext()
  const { darkModeBSClassNames } = useUIContext()
  return (
    <Container
      style={{ maxWidth: '500px' }}
      className={` p-2 pt-4 mt-2 mb-2 text-center ${darkModeBSClassNames}`}
    >
      <h3 className={`d-inline ${darkModeBSClassNames}`}>Gallery</h3>
      <Badge variant="warning" className={`small ml-2 mb-1`}>
        {filteredDeck.length} items
      </Badge>
      <SearchConsole />
      <ReactWindowFixedSizeList />
    </Container>
  )
}
