import React from 'react'

import { UIContextProvider, useUIContext } from 'hooks/useUIContext'
import { ArmySelectContextProvider } from 'hooks/useArmySelectContext'
import { DeckContextProvider } from 'hooks/useDeckContext'
import { NavBar } from './components/layout/NavBar'
import { DraftGallery } from './components/cards/DraftGallery'
import './scss/heroscapeFactionStyles.scss'
import { DraftArmy } from './components/cards/DraftArmy'
import { coreHeroscapeCards } from 'assets/coreHeroscapeCards'
import { FilterSettings } from 'components/cards/FilterSettings'

const App = () => {
  return (
    <UIContextProvider>
      <DeckContextProvider>
        <ArmySelectContextProvider>
          <GalleryPage />
        </ArmySelectContextProvider>
      </DeckContextProvider>
    </UIContextProvider>
  )
}

const GalleryPage = () => {
  const { darkMode } = useUIContext()
  const bgColor = darkMode ? 'var(--black)' : 'var(--white)'
  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgColor }}>
      <NavBar />
      <DraftArmy cards={coreHeroscapeCards} />
      <FilterSettings />
      <DraftGallery />
    </div>
  )
}

export default App
