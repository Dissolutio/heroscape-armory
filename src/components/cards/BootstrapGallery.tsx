import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ICoreHeroscapeCard } from '../../assets/coreHeroscapeCards'
import { BootstrapArmyCard } from './BootstrapArmyCard'
import { BootstrapArmy } from './BootstrapArmy'

interface Props {
  cards: ICoreHeroscapeCard[]
}

export const BootstrapGallery = (props: Props) => {
  const { cards } = props
  // const cardChunks = chunkArray(cards, perChunk)
  return (
    <Container fluid>
      <h2>Army</h2>
      <BootstrapArmy />
      <h2>Cards</h2>
      <Row xl={6} lg={5} md={3} sm={2} xs={1}>
        {cards.map((card) => (
          <Col key={card.cardID}>
            <BootstrapArmyCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
