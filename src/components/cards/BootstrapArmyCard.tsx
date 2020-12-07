import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import { ICoreHeroscapeCard } from '../../assets/coreHeroscapeCards'
import { useUIContext } from 'hooks/useUIContext'
import { useArmySelectContext } from 'hooks/useArmySelectContext'

export const BootstrapArmyCard = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  const {
    name: cardName,
    image,
    // general,
    race,
    type,
    cardClass,
    personality,
    height,
    life,
    move,
    range,
    attack,
    defense,
    points,
    // figures,
    // hexes,
    // setWave,
  } = card
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const { army, addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  const isInArmy = (card: ICoreHeroscapeCard): boolean => {
    return army.some((c) => c.cardID === card.cardID)
  }
  const addClickHandler = (card: ICoreHeroscapeCard) => {
    console.log(`${card.name} in army:`, isInArmy(card))
    addCardToArmy(card)
  }
  const removeClickHandler = (card: ICoreHeroscapeCard) => {
    console.log(`${card.name} in army:`, isInArmy(card))
    removeCardFromArmy(card)
  }
  return (
    <Card key={cardName} className={`mb-2 ${darkModeBSClassNames}`}>
      <Card.Header className={darkModeBSClassNames}>{cardName}</Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          src={`/heroscape-portraits/${image}`}
          style={{ height: 'auto', width: '100px' }}
          className="shadow-lg"
        />
        <Card.Text>
          <Badge
            variant={darkMode ? 'dark' : 'light'}
            style={{ textTransform: 'capitalize' }}
          >
            <span className="small">{type}</span>
          </Badge>
        </Card.Text>
        <Card.Text className="mt-1 mb-2">
          <Badge variant="warning" className="p-1">
            {points}
          </Badge>
          <span className="small text-warning">{` points`}</span>
        </Card.Text>
        {type.includes('hero') && (
          <Card.Text className="mt-2 mb-2">
            <Badge className="p-2" variant="danger">
              {life}
              {` Life `}
            </Badge>
          </Card.Text>
        )}

        <Card.Text className="mt-2 mb-2">
          <Badge
            className="mr-1 p-1"
            variant="light"
            style={{ textTransform: 'capitalize' }}
          >
            {race}
          </Badge>
          <Badge
            className="mr-1 p-1"
            variant="light"
            style={{ textTransform: 'capitalize' }}
          >
            {cardClass}
          </Badge>
          <Badge
            className="mr-1 p-1"
            variant="light"
            style={{ textTransform: 'capitalize' }}
          >
            {`${personality}`}
          </Badge>
        </Card.Text>

        <Card.Text className="d-flex mt-2 mb-2">
          <Badge className="p-2 mr-2 flex-fill" variant="success">
            Move: {move}
          </Badge>
          <Badge className="p-2 flex-fill" variant="secondary">
            Range: {range}
          </Badge>
        </Card.Text>
        <Card.Text className="d-flex mt-2 mb-2">
          <Badge className="flex-fill p-2 mr-2" variant="danger">
            Attack: {attack}
          </Badge>
          <Badge className="flex-fill p-2" variant="primary">
            Defense: {defense}
          </Badge>
        </Card.Text>
        <Card.Text className="mt-2 mb-4">
          <Badge className="p-2" variant="info">
            Height: {height.split(' ')[1]} {height.split(' ')[0]}
          </Badge>
        </Card.Text>

        <AbilitiesAccordion card={card} />
        <Button
          variant="outline-success"
          className="btn-block mt-3"
          onClick={() => addClickHandler(card)}
        >
          Add to Army
        </Button>
        <Button
          variant="outline-warning"
          className="btn-block mt-2 mb-2"
          onClick={() => removeClickHandler(card)}
        >
          Remove from Army
        </Button>
      </Card.Body>
    </Card>
  )
}
const AbilitiesAccordion = (props: { card: ICoreHeroscapeCard }) => {
  const { darkMode } = useUIContext()
  return (
    <Accordion>
      {props.card.abilities.map((ability, index) => {
        const eventKey = `${index}`
        return (
          <div key={index}>
            <Accordion.Toggle
              as={Button}
              variant={darkMode ? 'secondary' : 'light'}
              eventKey={eventKey}
              size="sm"
              style={{ textDecoration: 'underline' }}
              className="btn-block m-1 font-weight-bolder"
            >
              {ability.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
              <Card.Text className="p-2">{ability.desc}</Card.Text>
            </Accordion.Collapse>
          </div>
        )
      })}
    </Accordion>
  )
}
