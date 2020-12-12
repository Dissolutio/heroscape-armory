import React from 'react'
import Container from 'react-bootstrap/Container'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { ArmyDraftCard, useArmySelectContext } from 'hooks/useArmySelectContext'
import { ICoreHeroscapeCard } from '../../assets/coreHeroscapeCards'
import { Image } from 'react-bootstrap'

export const DraftArmy = (props: { cards: ICoreHeroscapeCard[] }) => {
  const { cards } = props
  const { darkMode, darkModeBSClassNames, toggleDarkMode } = useUIContext()
  const { army, addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  return (
    <Container className={`${darkModeBSClassNames} mt-2 mb-2`}>
      <h2 className={`text-center`}>Army</h2>
      <Container
        className={`d-flex flex-row flex-wrap align-items-center ${darkModeBSClassNames}`}
      >
        {army.map((draftCard: ArmyDraftCard) => {
          const { cardID, count } = draftCard
          const armyCard = cards.find((c) => c.cardID === cardID)
          return (
            <div key={cardID} className="d-flex flex-column align-items-center">
              <Image
                src={`/heroscape-portraits/${armyCard.image}`}
                style={{ width: '30px' }}
                className="pl-1 pr-1 pt-1"
              />
              <span className="small">{`x ${count}`}</span>
            </div>
          )
        })}
      </Container>
    </Container>
  )
}
