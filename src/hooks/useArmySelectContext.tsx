import { ICoreHeroscapeCard } from 'assets/coreHeroscapeCards'
import React, { createContext, useContext, useState } from 'react'

const ArmySelectContext = createContext<Partial<ArmySelectContextValue>>({
  army: [],
})

const useArmySelectContext = () => {
  return {
    ...useContext(ArmySelectContext),
  }
}
export interface ArmyDraftCard {
  cardID: string
  count: number
}
type ArmySelectContextValue = {
  army: ArmyDraftCard[]
  setArmy: React.Dispatch<React.SetStateAction<ArmyDraftCard[]>>
  removeCardFromArmy: (card: ICoreHeroscapeCard) => void
  addCardToArmy: (card: ICoreHeroscapeCard) => void
  clearArmy: () => void
  getDraftCardByCardID: (card: ICoreHeroscapeCard) => boolean
}

const ArmySelectContextProvider: React.FC = (props) => {
  const [army, setArmy] = useState([])

  const addCardToArmy = (card: ICoreHeroscapeCard) => {
    setArmy((army) => {
      const newArmy = [...army]
      const cardID = card.cardID
      const isUniqueCard = card.type.includes('unique')
      const isInArmyAlready = army.some((cardToAdd) => {
        return cardToAdd.cardID === cardID
      })
      if (isInArmyAlready && isUniqueCard) {
        console.error(
          'Card not added to army. Cannot have more than one of a unique card.',
        )
        return army
      } else if (isInArmyAlready && !isUniqueCard) {
        newArmy.forEach((c, index) => {
          if (c.cardID === cardID) {
            army[index].count += 1
          }
        })
      } else {
        newArmy.push({ cardID, count: 1 })
      }
      return newArmy
    })
  }
  const removeCardFromArmy = (card: ICoreHeroscapeCard) => {
    setArmy((army) => {
      const newArmy = [...army]
      // find card
      const cardID = card.cardID
      const armyDraftCard = army.find((c) => c.cardID === cardID)
      const newCount = armyDraftCard?.count ?? 0
      // abort if no card
      if (!armyDraftCard) {
        // throw error
        console.error('removeFromArmy -- card not in army')
        return army
      }
      // remove card
      else if (newCount <= 1) {
        return newArmy.filter((c) => c.cardID !== cardID)
      }
      // or decrement card
      return newArmy.map((c) => {
        if (c.cardID !== cardID) {
          return { ...c, count: newCount }
        }
        return c
      })
    })
  }
  const getDraftCardByCardID = (card: ICoreHeroscapeCard): ArmyDraftCard => {
    return army.find((c) => c.cardID === card.cardID)
  }
  const getDraftCardByCardID = (card: ICoreHeroscapeCard): ArmyDraftCard => {
    return army.find((c) => c.cardID === card.cardID)
  }

  return (
    <ArmySelectContext.Provider
      value={{
        // state
        army,
        setArmy,
        addCardToArmy,
        removeCardFromArmy,
        getDraftCardByCardID,
      }}
    >
      {props.children}
    </ArmySelectContext.Provider>
  )
}

export { ArmySelectContextProvider, useArmySelectContext }
