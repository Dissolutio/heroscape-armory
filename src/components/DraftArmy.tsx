import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { ArmyDraftCard, useArmySelectContext } from 'hooks/useArmySelectContext'

export const DraftArmy = () => {
  const { deck, setFilterForCardID } = useDeckContext()
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const { army, addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  const armyCost = army.reduce((prev, curr) => {
    const cardID = curr.cardID
    const card = deck.find((c) => c.cardID === cardID)
    const cardPoints = parseInt(card.points)
    return prev + cardPoints
  }, 0)
  return (
    <Container className={`mt-2 mb-2`}>
      <Jumbotron
        className={`${darkModeBSClassNames} text-center mt-3 pt-1 pb-2`}
      >
        <h3 className={`d-inline small`}>Army: </h3>
        <Badge variant="warning" className={`small ml-2 mb-1`}>
          {armyCost} points
        </Badge>
        <div className={`d-flex flex-row flex-wrap align-items-center`}>
          {army.map((draftCard: ArmyDraftCard) => {
            const { cardID, count } = draftCard
            const armyCard = deck.find((c) => c.cardID === cardID)
            return (
              <div
                key={cardID}
                className="d-flex flex-column align-items-center"
                onClick={() => setFilterForCardID(cardID)}
              >
                <Image
                  src={`/heroscape-portraits/${armyCard.image}`}
                  style={{ width: '50px' }}
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
