import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { ICoreHeroscapeCard } from '../../assets/coreHeroscapeCards'
import { Accordion } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

interface Props {
  card: ICoreHeroscapeCard
}

export const BootstrapArmyCard = (props: Props) => {
  const { card } = props
  const {
    name,
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

  return (
    <Card
      key={card.name}
      bg={'dark'}
      className="mb-2"
      style={{ width: '130px' }}
    >
      <Card.Header>{card.name}</Card.Header>
      <Card.Body>
        <Card.Img
          src={`/heroscape-portraits/${image}`}
          style={{ height: 'auto', width: '100px' }}
        />
        <Card.Text>
          <Badge variant="dark">{points} points</Badge>
        </Card.Text>
        {/* 
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}

        <Card.Text>{type}</Card.Text>
        <Card.Text>{cardClass}</Card.Text>
        <Card.Text>{personality}</Card.Text>
        <Card.Text>{race}</Card.Text>
        <Card.Text>Life: {life}</Card.Text>
        <Card.Text>Range: {range}</Card.Text>
        <Card.Text>Move: {move}</Card.Text>
        <Card.Text>Attack: {attack}</Card.Text>
        <Card.Text>Defense: {defense}</Card.Text>
        <Card.Text>
          Height: {height.split(' ')[1]} {height.split(' ')[0]}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
