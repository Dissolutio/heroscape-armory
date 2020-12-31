import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import { useUIContext } from 'hooks/useUIContext'
import { useArmySelectContext } from 'hooks/useArmySelectContext'
import { CardGridStyle } from './CardGridStyle'
import { ICoreHeroscapeCard } from 'assets/coreHeroscapeCards'
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs'

export const GalleryCard = (props) => {
  const card: ICoreHeroscapeCard = props.card
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const factionFrameClassName = `${card.general}-frame`
  const factionBgClassName = `${card.general}-background-gradient${
    !darkMode ? '__light' : ''
  }`

  return (
    <Card key={card.name} className={`h-100 ${darkModeBSClassNames} mb-3 mt-3`}>
      <Card.Header
        className={`${factionBgClassName} ${factionFrameClassName} border-0`}
      >
        {card.name}
      </Card.Header>
      <Card.Body className={`${card.general}-frame`}>
        <CardGridStyle>
          <div className="cardgrid_portrait">
            <Card.Img
              src={`/heroscape-portraits/${card.image}`}
              className="text-center h-100"
            />
          </div>

          <div className="cardgrid_points">
            <TypePointsLifeFigures card={card} />
          </div>

          <div className="cardgrid_stats">
            <StatsSection card={card} />
          </div>

          <div className="cardgrid_abilities">
            <h4 className="small border-secondary border-bottom mt-1">
              Abilities
            </h4>
            <AbilitiesBadges card={card} />
          </div>

          <div className="cardgrid_buttons">
            <AddRemoveButtonToolbar card={card} />
          </div>
        </CardGridStyle>
      </Card.Body>
    </Card>
  )
}
const TypePointsLifeFigures = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  const { darkMode } = useUIContext()
  return (
    <>
      <Badge className={`d-block`} style={{ textTransform: 'capitalize' }}>
        <span className="small">{card.type}</span>
      </Badge>
      <Badge variant="warning" className={`d-block`}>
        {card.points}
        <span className="small mb-1">{` points`}</span>
      </Badge>
      {card.type.includes('hero') && (
        <Card.Text className="mt-2 mb-2">
          <Badge className="pb-1" variant="danger">
            {card.life}
            <span className="small">{` life`}</span>
          </Badge>
        </Card.Text>
      )}
      {card.type.includes('squad') && (
        <Card.Text className="mt-2 mb-2">
          <Badge className="pb-1" variant={darkMode ? 'light' : 'dark'}>
            {card.figures}
            <span className="small">{` figures`}</span>
          </Badge>
        </Card.Text>
      )}
    </>
  )
}
const StatsSection = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <span className="flex-fill">
        <Badge
          className="p-1 mr-1"
          variant="light"
          style={{ textTransform: 'capitalize' }}
        >
          {card.race}
        </Badge>
        <Badge
          className="p-1 mr-1"
          variant="light"
          style={{ textTransform: 'capitalize' }}
        >
          {card.cardClass}
        </Badge>
        <Badge
          className="p-1 mr-1"
          variant="light"
          style={{ textTransform: 'capitalize' }}
        >
          {`${card.personality}`}
        </Badge>
      </span>

      <span className="flex-fill p-1 mt-2">
        <Badge className="p-1 w-50" variant="success">
          Move: {card.move}
        </Badge>

        <Badge className="p-1 w-50" variant="secondary">
          Range: {card.range}
        </Badge>
      </span>
      <span className="flex-fill p-1 mt-2">
        <Badge className="p-1 w-50" variant="danger">
          Attack: {card.attack}
        </Badge>

        <Badge className="p-1 w-50" variant="primary">
          Defense: {card.defense}
        </Badge>
      </span>
      <span className="flex-fill mt-2">
        <Badge className="p-1 mr-1" variant="info">
          Height: {card.height.split(' ')[1]} {card.height.split(' ')[0]}
        </Badge>
      </span>
    </div>
  )
}

const AddRemoveButtonToolbar = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  const {
    addCardToArmy,
    removeCardFromArmy,
    getDraftCardByCardID,
  } = useArmySelectContext()

  const armyCard = getDraftCardByCardID(card.cardID)
  const addClickHandler = (card: ICoreHeroscapeCard) => {
    addCardToArmy(card)
  }
  const removeClickHandler = (card: ICoreHeroscapeCard) => {
    removeCardFromArmy(card)
  }
  return (
    <ButtonToolbar
      className={`w-100 justify-content-around`}
      aria-label="Toolbar with Button groups"
    >
      <Button
        variant="danger"
        className={`flex-fill mr-1 `}
        disabled={}
        onClick={() => removeClickHandler(card)}
      >
        <BsDashCircle />
      </Button>
  <Badge variant='info'>{getDraftCardByCardID ? }</Badge>
      <Button
        variant="success"
        className={`flex-fill ml-1 `}
        onClick={() => addClickHandler(card)}
      >
        <BsPlusCircle />
      </Button>
    </ButtonToolbar>
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
