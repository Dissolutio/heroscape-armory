import React from 'react'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { SearchConsole } from './SearchConsole'
import { ReactWindowFixedSizeList } from './ReactWindowFixedSizeList'

export const GalleryList = () => {
  const { filteredDeck } = useDeckContext()
  const { darkModeBSClassNames } = useUIContext()
  return (
    <Container className={`mt-2 mb-2`}>
      <Jumbotron className={`text-center ${darkModeBSClassNames}`}>
        <h3 className={`d-inline ${darkModeBSClassNames}`}>Gallery </h3>
        <Badge variant="warning" className={`small`}>
          {filteredDeck.length} items
        </Badge>
        <SearchConsole />
        <Container className={` p-2 pt-4 mt-2 mb-2`}>
          <ReactWindowFixedSizeList />
        </Container>
      </Jumbotron>
    </Container>
  )
}
