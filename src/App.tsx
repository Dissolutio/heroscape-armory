import React from 'react'
import Container from 'react-bootstrap/Container'

import { ArmySelectContextProvider } from 'hooks/useArmySelectContext'
import { UIContextProvider, useUIContext } from 'hooks/useUIContext'
import { BootstrapGallery } from './components/cards/BootstrapGallery'
import './scss/heroscapeFactionStyles.scss'
import { ArmyCardGallery } from './components/cards/ArmyCardGallery'
import { BootstrapArmy } from './components/cards/BootstrapArmy'

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
  const { darkMode, darkModeBSClassNames, toggleDarkMode } = useUIContext()
  const bgColor = darkMode ? 'var(--bs-dark)' : 'var(--bs-light)'
  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgColor }}>
      <h1
        onClick={toggleDarkMode}
        className={`header p-4 text-center ${darkModeBSClassNames}`}
      >
        Heroscape Armory
      </h1>
      <BootstrapArmy />
      {/* <BootstrapGallery cards={coreHeroscapeCards} /> */}
      <ArmyCardGallery />
    </div>
  )
}

export default App
