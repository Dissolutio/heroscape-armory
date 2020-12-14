import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { useUIContext } from 'hooks/useUIContext'
import { useArmySelectContext } from 'hooks/useArmySelectContext'
import { CardGridStyle } from './CardGridStyle'
import { ICoreHeroscapeCard } from 'assets/coreHeroscapeCards'

export const GalleryCard = (props) => {
  const card: ICoreHeroscapeCard = props.card
  const { army, addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  const { darkModeBSClassNames } = useUIContext()
  const isInArmy = (card: ICoreHeroscapeCard): boolean => {
    return army.some((c) => c.cardID === card.cardID)
  }
  const addClickHandler = (card: ICoreHeroscapeCard) => {
    addCardToArmy(card)
  }
  const removeClickHandler = (card: ICoreHeroscapeCard) => {
    removeCardFromArmy(card)
  }
  return (
    <Card key={card.name} className={`${darkModeBSClassNames} mb-3 mt-3`}>
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
              className="shadow-md text-center"
            />
          </div>

          <div className="g2">
            <Badge
              className={`d-block`}
              style={{ textTransform: 'capitalize' }}
            >
              <span className="small">{card.type}</span>
            </Badge>
            <div>
              <Badge variant="warning" className="p-1">
                {card.points}
              </Badge>
              <span className="small text-warning">{` points`}</span>
            </div>
            {card.type.includes('hero') && (
              <Card.Text className="mt-2 mb-2">
                <Badge className="p-2" variant="danger">
                  {card.life}
                  {` Life `}
                </Badge>
              </Card.Text>
            )}
          </div>

          <Tab.Container defaultActiveKey="stats">
            <div className="g3">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="stats">
                    <span className="small">Stats</span>
                  </Nav.Link>
                </Nav.Item>
                <AbilitiesTabs card={card} />
              </Nav>
            </div>
            <div className="g4">
              <Tab.Content style={{ height: '100%' }}>
                <Tab.Pane style={{ height: '100%' }} eventKey="stats">
                  <Card.Text
                    style={{ height: '100%' }}
                    className="d-flex flex-column justify-content-between"
                  >
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
                        Height: {card.height.split(' ')[1]}{' '}
                        {card.height.split(' ')[0]}
                      </Badge>
                    </span>
                    <span className="flex-fill">
                      <Button
                        size="sm"
                        variant="outline-success"
                        onClick={() => addClickHandler(card)}
                      >
                        Add to Army
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-warning"
                        onClick={() => removeClickHandler(card)}
                      >
                        Remove from Army
                      </Button>
                    </span>
                  </Card.Text>
                </Tab.Pane>
                <AbilitiesPanes card={card} />
              </Tab.Content>
            </div>
          </Tab.Container>
        </CardGridStyle>
      </Card.Body>
    </Card>
  )
}
const AbilitiesTabs = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  return (
    <>
      {card.abilities.map((ability, index) => {
        return (
          <Nav.Item key={index}>
            <Nav.Link eventKey={index}>
              <span className="small">{ability.name}</span>
            </Nav.Link>
          </Nav.Item>
        )
      })}
    </>
  )
}
const AbilitiesPanes = (props: { card: ICoreHeroscapeCard }) => {
  const { card } = props
  return (
    <>
      {card.abilities.map((ability, index) => (
        <Tab.Pane eventKey={index} key={index}>
          <Card.Text style={{ marginBottom: '5rem' }}>{ability.desc}</Card.Text>
        </Tab.Pane>
      ))}
    </>
  )
}
