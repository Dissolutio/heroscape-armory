import React, { useContext, useState } from 'react'
import { shuffleArray } from 'utils'
import {
  coreHeroscapeCards,
  ICoreHeroscapeCard,
} from '../assets/coreHeroscapeCards'

export const DeckContext = React.createContext<Partial<DeckContextValue>>({
  filters: [],
})

type FilterType = 'all' | 'general' | 'cardID' | 'setWave'
interface CardFilter {
  fields: FilterType
  value: string
}

interface DeckContextValue {
  filters: CardFilter[]
  setFilters: React.Dispatch<React.SetStateAction<CardFilter[]>>
  deck: ICoreHeroscapeCard[]
  filteredDeck: ICoreHeroscapeCard[]
  addFilter: (text: string, fields: FilterType) => void
  setFilterForCardID: (cardName: string) => void
}

const DeckContextProvider = (props: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState([])
  const [deck, setDeck] = useState(() => shuffleArray(coreHeroscapeCards))

  const filteredDeck = filters.reduce((prev, filter) => {
    return runFilterOnCards(filter, prev)
  }, deck)

  const addFilter = (text: string, fields: FilterType) => {
    // If there is already a filter of the same type, then replace it,
    // otherwise just add the new one.
    setFilters((state) => {
      const newState = [...state]
      const oldFilterIndex = state.findIndex((f) => f.fields === fields)
      const hasOldFilter = oldFilterIndex >= 0
      const newFilter = { fields, value: text }
      if (hasOldFilter) {
        newState[oldFilterIndex] = newFilter
      } else {
        newState.push(newFilter)
      }
      return newState
    })
  }
  const setFilterForCardID = (cardID: string) => {
    setFilters([{ fields: 'cardID', value: cardID }])
  }

  const ctxValue = {
    filters,
    setFilters,
    deck,
    filteredDeck,
    addFilter,
    setFilterForCardID,
  }
  return (
    <DeckContext.Provider value={ctxValue}>
      {props.children}
    </DeckContext.Provider>
  )
}

const useDeckContext = () => {
  return useContext(DeckContext)
}

export { DeckContextProvider, useDeckContext }

// FILTER FUNCTION
const runFilterOnCards = (filter: CardFilter, cards: ICoreHeroscapeCard[]) => {
  const { fields, value } = filter
  const regexp = new RegExp(`${value}`, 'i')
  const cardsByName = coreHeroscapeCards.filter(filterByCardName)
  const cardsByCardID = coreHeroscapeCards.filter(filterByCardID)
  const cardsByGeneral = coreHeroscapeCards.filter(filterByCardGeneral)
  const cardsByClass = coreHeroscapeCards.filter(filterByCardClass)
  const cardsByRace = coreHeroscapeCards.filter(filterByCardRace)
  const cardsByPersonality = coreHeroscapeCards.filter(filterByCardPersonality)
  const cardsByAbilities = coreHeroscapeCards.filter(filterByAbilities)
  const cardsBySetWave = coreHeroscapeCards.filter(filterBySetWave)

  switch (fields) {
    case 'all':
      return cardsByName
        .concat(cardsByGeneral)
        .concat(cardsByClass)
        .concat(cardsByRace)
        .concat(cardsByPersonality)
        .concat(cardsByAbilities)
        .filter(makeArrayUnique)
    case 'cardID':
      return cardsByCardID.filter(makeArrayUnique)
    case 'general':
      return cardsByGeneral.filter(makeArrayUnique)
    case 'setWave':
      return cardsBySetWave.filter(makeArrayUnique)
    default:
      return cards
  }

  function filterByCardID(card) {
    return card.cardID.match(regexp)
  }
  function filterByCardName(card) {
    return card.name.match(regexp)
  }
  function filterByCardGeneral(card) {
    return card.general.match(regexp)
  }
  function filterByCardRace(card) {
    return card.race.match(regexp)
  }
  function filterByCardClass(card) {
    return card.cardClass.match(regexp)
  }
  function filterByCardPersonality(card) {
    return card.personality.match(regexp)
  }
  function filterByAbilities(card) {
    return card.abilities.some((ability) => {
      return ability.name.match(regexp) || ability.desc.match(regexp)
    })
  }
  function filterBySetWave(card) {
    return card.setWave.match(regexp)
  }
  function makeArrayUnique(value, index, self) {
    return self.indexOf(value) === index
  }
}
