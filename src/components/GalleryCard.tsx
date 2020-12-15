import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import { useUIContext } from 'hooks/useUIContext'
import { useArmySelectContext } from 'hooks/useArmySelectContext'
import { CardGridStyle } from './CardGridStyle'
import { ICoreHeroscapeCard } from 'assets/coreHeroscapeCards'
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs'

export const GalleryCard = (props) => {
  const card: ICoreHeroscapeCard = props.card
  const { army } = useArmySelectContext()
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const isInArmy = (card: ICoreHeroscapeCard): boolean => {
    return army.some((c) => c.cardID === card.cardID)
  }
  return (
    <Card key={card.name} className={`h-100 ${darkModeBSClassNames} mb-3 mt-3`}>
      <Card.Header
        className={`${card.general}-background-gradient ${card.general}-frame border-0`}
      >
        {card.name}
      </Card.Header>
      <Card.Body className={`${card.general}-frame`}>
        <CardGridStyle>
          <div className="g1">
            <Card.Img
              src={`/heroscape-portraits/${card.image}`}
              className="text-center h-100"
            />
          </div>

          <div className="g2">
            <Badge
              className={`d-block`}
              style={{ textTransform: 'capitalize' }}
            >
              <span className="small">{card.type}</span>
            </Badge>
            <Badge variant="warning" className={`d-block`}>
              {card.points}
              <span className="small">{` points`}</span>
            </Badge>
            {card.type.includes('hero') && (
              <Card.Text className="mt-2 mb-2">
                <Badge className="" variant="danger">
                  {card.life}
                  <span className="small">{` life`}</span>
                </Badge>
              </Card.Text>
            )}
            {card.type.includes('squad') && (
              <Card.Text className="mt-2 mb-2">
                <Badge className="" variant={darkMode ? 'light' : 'dark'}>
                  {card.figures}
                  <span className="small">{` figures`}</span>
                </Badge>
              </Card.Text>
            )}
          </div>

          <div className="g3">
            <StatsSection card={card} />
          </div>

          <div className="g4">
            <h4 className="small border-secondary border-bottom">Abilities</h4>
            <AbilitiesBadges card={card} />
          </div>

          <div className="g5">
            <AddRemoveButtons card={card} />
          </div>
        </CardGridStyle>
      </Card.Body>
    </Card>
  )
}
const StatsSection = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  return (
    <div className="d-flex flex-column justify-content-between">
      <span className="flex-fill">
        <Badge
          className="mr-1"
          variant="light"
          style={{ textTransform: 'capitalize' }}
        >
          {card.race}
        </Badge>
        <Badge
          className="mr-1"
          variant="light"
          style={{ textTransform: 'capitalize' }}
        >
          {card.cardClass}
        </Badge>
        <Badge
          className="mr-1"
          variant="light"
          style={{ textTransform: 'capitalize' }}
        >
          {`${card.personality}`}
        </Badge>
      </span>

      <span className="flex-fill">
        <Badge variant="success">Move: {card.move}</Badge>
        <Badge variant="secondary">Range: {card.range}</Badge>
        <Badge variant="danger">Attack: {card.attack}</Badge>
        <Badge variant="primary">Defense: {card.defense}</Badge>
        <Badge variant="info">
          Height: {card.height.split(' ')[1]} {card.height.split(' ')[0]}
        </Badge>
      </span>
    </div>
  )
}

const AddRemoveButtons = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  const { addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  const addClickHandler = (card: ICoreHeroscapeCard) => {
    addCardToArmy(card)
  }
  const removeClickHandler = (card: ICoreHeroscapeCard) => {
    removeCardFromArmy(card)
  }
  return (
    <Container>
      <ButtonToolbar
        className={`w-100 justify-content-around`}
        aria-label="Toolbar with Button groups"
      >
        <Button
          variant="outline-danger"
          className={`flex-fill mr-3 `}
          onClick={() => removeClickHandler(card)}
        >
          <BsDashCircle />
        </Button>
        <Button
          variant="outline-success"
          className={`flex-fill ml-3 `}
          onClick={() => addClickHandler(card)}
        >
          <BsPlusCircle />
        </Button>
      </ButtonToolbar>
    </Container>
  )
}

const AbilitiesBadges = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  const { openModalAbility } = useUIContext()
  return (
    <>
      {card.abilities.map((ability, index) => {
        return (
          <Badge
            as={Button}
            variant="info"
            onClick={() => {
              openModalAbility(ability)
            }}
            key={index}
            className={`p-1 m-1`}
          >
            {ability.name}
          </Badge>
        )
      })}
    </>
  )
}
