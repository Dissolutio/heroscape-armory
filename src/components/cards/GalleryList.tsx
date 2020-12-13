import React from 'react'
import { FixedSizeList as List } from 'react-window'
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
        <h2 className={` ${darkModeBSClassNames}`}>Gallery </h2>
        <Badge variant="warning" className={`small`}>
          {filteredDeck.length} items
        </Badge>
        <SearchConsole />
      </Jumbotron>
      <Container className={`${darkModeBSClassNames} mt-2 mb-2`}>
        <ReactWindowFixedSizeList />
      </Container>
    </Container>
  )
}
