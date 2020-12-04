import React from 'react'
import Container from 'react-bootstrap/Container'

import { ArmySelectContextProvider } from 'hooks/useArmySelectContext'
import { UIContextProvider, useUIContext } from 'hooks/useUIContext'
import { coreHeroscapeCards } from './assets/coreHeroscapeCards'
import { BootstrapGallery } from './components/cards/BootstrapGallery'
import './scss/App.scss'
import './scss/heroscapeFactionStyles.scss'

const App = () => {
  return (
    <UIContextProvider>
      <ArmySelectContextProvider>
        <GalleryPage />
      </ArmySelectContextProvider>
    </UIContextProvider>
  )
}

const GalleryPage = () => {
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const bgColor = darkMode ? 'var(--black)' : ''
  return (
    <Container
      fluid
      className={`app-wrapper`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className={`header p-4 ${darkModeBSClassNames}`}>Heroscape Armory</h1>
      <BootstrapGallery cards={coreHeroscapeCards} />
    </Container>
  )
}

export default App
