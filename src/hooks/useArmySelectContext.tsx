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
interface ArmyDraftCard {
  cardID: string
  count: number
}
type ArmySelectContextValue = {
  // state
  army: ArmyDraftCard[]
  setArmy: React.Dispatch<React.SetStateAction<ArmyDraftCard[]>>
  removeCardFromArmy: (card: ICoreHeroscapeCard) => void
  addCardToArmy: (card: ICoreHeroscapeCard) => void
  clearArmy: () => void
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
      console.log(
        `🚀 ~ file: useArmySelectContext.tsx ~ line 53 ~ setArmy ~ newArmy`,
        newArmy,
      )
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
        if (c.name !== cardID) {
          return { ...c, count: newCount }
        }
        return c
      })
    })
  }

  return (
    <ArmySelectContext.Provider
      value={{
        // state
        army,
        setArmy,
        addCardToArmy,
        removeCardFromArmy,
      }}
    >
      {props.children}
    </ArmySelectContext.Provider>
  )
}

export { ArmySelectContextProvider, useArmySelectContext }
