import React, { useContext, useState } from 'react'
import { CardAbility } from 'assets/coreHeroscapeCards'

export const UIContext = React.createContext<Partial<UIContextValue>>(null)

export const modalStates = { off: 'off', ability: 'ability' }

type UICtxState = {
  menuOpen: boolean
  darkMode: boolean
  modalState: string
  modalAbility: CardAbility
}

interface UIContextValue extends UICtxState {
  toggleDarkMode: () => void
  darkModeBSClassNames: string
  toggleMenuOpen: () => void
  closeModal: () => void
  openModalAbility: (ability: CardAbility) => void
}

const UIContextProvider = (props) => {
  const [clientState, setClientState] = useState({
    menuOpen: false,
    darkMode: true,
    modalState: modalStates.off,
    modalAbility: {
      name: 'The Ability',
      desc: 'It rages and roils and toils till death do you part.',
    },
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
  const closeModal = () => {
    setClientState((s) => ({ ...s, modalState: modalStates.off }))
  }
  const openModalAbility = (ability: CardAbility) => {
    setClientState((s) => ({
      ...s,
      modalState: modalStates.ability,
      modalAbility: ability,
    }))
  }

  const ctxValue = {
    darkMode: clientState.darkMode,
    toggleDarkMode,
    darkModeBSClassNames,
    menuOpen: clientState.menuOpen,
    toggleMenuOpen,
    modalState: clientState.modalState,
    modalAbility: clientState.modalAbility,
    openModalAbility,
    closeModal,
  }
  return (
    <UIContext.Provider value={ctxValue}>{props.children}</UIContext.Provider>
  )
}

const useUIContext = () => {
  return useContext(UIContext)
}

export { UIContextProvider, useUIContext }
