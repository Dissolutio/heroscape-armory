import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import { ICoreHeroscapeCard } from '../../assets/coreHeroscapeCards'
import { BootstrapArmyCard } from './BootstrapArmyCard'
import { chunkArray } from '../../utils/chunk'

interface Props {
  cards: ICoreHeroscapeCard[]
}

export const BootstrapGallery = (props: Props) => {
  const { cards } = props
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const perChunk = Math.floor(width / 200)
  const cardChunks = chunkArray(cards, perChunk)
  return (
    <Container fluid>
      {cardChunks.map((chunk, index) => (
        <CardDeck key={index}>
          <CardChunk cardChunk={chunk} />
        </CardDeck>
      ))}
    </Container>
  )
}

const CardChunk = ({ cardChunk }) =>
  cardChunk.map((card) => {
    return <BootstrapArmyCard key={card.hsCardID} card={card} />
  })
