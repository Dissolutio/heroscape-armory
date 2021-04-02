import React from 'react'
import { Container } from 'react-bootstrap'
import { Core_Data, MS1_Data } from '../../assets/cardData'

export const CardData = () => {
  const {
    cards,
    squads,
    heroes,
    abilities,
    uniqueSquads,
    commonSquads,
    uniqueHeroes,
    commonHeroes,
    uncommonHeroes,
  } = Core_Data
  return (
    <Container as="main">
      <h1>Abilities</h1>
      <p>Gonna try and sortem</p>
      <ul></ul>
    </Container>
  )
}
