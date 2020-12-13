import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { ArmyDraftCard, useArmySelectContext } from 'hooks/useArmySelectContext'

export const DraftArmy = () => {
  const { deck } = useDeckContext()
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const { army, addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  return (
    <Container className={`mt-2 mb-2`}>
      <Jumbotron className={`${darkModeBSClassNames} mt-3 pt-1 pb-4`}>
        <h2 className={`text-center small`}>Army</h2>
        <div className={`d-flex flex-row flex-wrap align-items-center`}>
          {army.map((draftCard: ArmyDraftCard) => {
            const { cardID, count } = draftCard
            const armyCard = deck.find((c) => c.cardID === cardID)
            return (
              <div
                key={cardID}
                className="d-flex flex-column align-items-center"
              >
                <Image
                  src={`/heroscape-portraits/${armyCard.image}`}
                  style={{ width: '30px' }}
                  className="pl-1 pr-1 pt-1"
                />
                <span className="small">{`x ${count}`}</span>
              </div>
            )
          })}
        </div>
      </Jumbotron>
    </Container>
  )
}
