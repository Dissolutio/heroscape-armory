import React from 'react'
import Container from 'react-bootstrap/Container'

import { useUIContext } from 'hooks'
import { DraftArmy } from './DraftArmy'
import { SearchConsole } from './SearchConsole'
import { ReactWindowFixedSizeList } from './ReactWindowFixedSizeList'

export const GalleryPage = () => {
  const { darkModeBSClassNames } = useUIContext()
  return (
    <>
      <DraftArmy />
      <Container
        style={{ maxWidth: '500px' }}
        className={` p-2 pt-4 mt-2 mb-2 text-center ${darkModeBSClassNames}`}
      >
        <SearchConsole />
        <ReactWindowFixedSizeList />
      </Container>
    </>
  )
}
