import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import { useUIContext } from 'hooks'
import { DraftArmy } from './DraftArmy'
import { SearchConsole } from './SearchConsole'
import { ReactWindowFixedSizeList } from './ReactWindowFixedSizeList'

export const GalleryPage = () => {
  const { darkModeBSClassNames } = useUIContext()
  return (
    <>
      <DraftArmy />
      <Container style={{ maxWidth: '500px' }}>
        <Jumbotron
          className={`${darkModeBSClassNames} text-center pt-1 pb-2 mt-0`}
        >
          <SearchConsole />
          <ReactWindowFixedSizeList />
        </Jumbotron>
      </Container>
    </>
  )
}
