import React from 'react'

import { UIContextProvider, useUIContext } from 'hooks/useUIContext'
import { ArmySelectContextProvider } from 'hooks/useArmySelectContext'
import { DeckContextProvider } from 'hooks/useDeckContext'
import { NavBar } from './components/layout/NavBar'
import { GalleryList } from './components/GalleryList'
import './scss/heroscapeFactionStyles.scss'
import { DraftArmy } from './components/DraftArmy'
import ModalDisplay from './components/ModalDisplay'

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
      <ModalDisplay />
      <DraftArmy />
      <GalleryList />
    </div>
  )
}

export default App
