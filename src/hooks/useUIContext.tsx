import React, { useContext, useState } from 'react'

export const UIContext = React.createContext<Partial<UIContextValue>>(null)

type UICtxState = {
  menuOpen: boolean
  darkMode: boolean
}

interface UIContextValue extends UICtxState {
  toggleDarkMode: () => void
  toggleMenuOpen: () => void
  darkModeBSClassNames: string
}

const UIContextProvider = (props) => {
  const [clientState, setClientState] = useState({
    menuOpen: false,
    darkMode: true,
  })
  const darkModeBSClassNames = `bg-${
    clientState.darkMode ? 'dark' : 'light'
  } text-${clientState.darkMode ? 'light' : 'dark'}`

  const toggleMenuOpen = () => {
    setClientState((s) => ({ ...s, menuOpen: !s.menuOpen }))
  }
  const toggleDarkMode = () => {
    setClientState((s) => {
      return {
        ...s,
        darkMode: !s.darkMode,
      }
    })
  }
  const ctxValue = {
    darkMode: clientState.darkMode,
    menuOpen: clientState.menuOpen,
    darkModeBSClassNames,
    toggleMenuOpen,
    toggleDarkMode,
  }
  return (
    <UIContext.Provider value={ctxValue}>{props.children}</UIContext.Provider>
  )
}

const useUIContext = () => {
  return useContext(UIContext)
}

export { UIContextProvider, useUIContext }
