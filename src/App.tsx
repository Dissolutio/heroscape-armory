import React from 'react'

import { UIContextProvider, useUIContext } from 'hooks/useUIContext'
import { ArmySelectContextProvider } from 'hooks/useArmySelectContext'
import { DeckContextProvider } from 'hooks/useDeckContext'
import { NavBar } from './components/layout/NavBar'
import { GalleryList } from './components/cards/GalleryList'
import './scss/heroscapeFactionStyles.scss'
import { DraftArmy } from './components/cards/DraftArmy'

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
  const bgColor = darkMode ? 'var(--black)' : 'var(--secondary)'
  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgColor }}>
      <NavBar />
      <DraftArmy />
      <GalleryList />
    </div>
  )
}

export default App
