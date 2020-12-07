import React from 'react'

import { UIContextProvider, useUIContext } from 'hooks/useUIContext'
import { ArmySelectContextProvider } from 'hooks/useArmySelectContext'
import { ArmyCardGallery } from './components/cards/ArmyCardGallery'
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
      <ArmyCardGallery />
    </div>
  )
}

export default App
