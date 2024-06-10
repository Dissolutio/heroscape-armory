import React from 'react'
import { useArmySelectContext, useUIContext } from 'hooks'
import { CardGridStyle } from './CardGridStyle'
import { ICoreHeroscapeCard } from 'assets/coreHeroscapeCards'
import { BsDash, BsPlus } from 'react-icons/bs'
import styled from 'styled-components'
import { Accordion } from 'react-bootstrap'

export const QuickCard = (props: { card: ICoreHeroscapeCard }) => {
  const card: ICoreHeroscapeCard = props.card
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const factionFrameClassName = `${card.general}-frame`
  const factionGradientClassName = `${card.general}-background-gradient${
    !darkMode ? '__light' : ''
  }`

  return (
    <CardGrid>
      <div className="info">
        <InfoSection card={card} />
      </div>
      <div className="main">
        <MainSection card={card} />
      </div>
      <div className="portrait">
        <Portrait card={card} />
      </div>
      <div className="stats">
        <Stats card={card} />
      </div>
    </CardGrid>
  )
}
const CardGrid = styled.div`
  display: grid;
  width: 500px;
  height: 400px;
  grid-gap: 0.4rem;
  grid-template-columns: 1.5fr 2.5fr 2fr;
  grid-template-rows: 3fr 1fr 0.1fr 1fr 3fr;
  grid-template-areas:
    '. main portrait'
    'info main portrait'
    'info main .'
    'info main stats'
    '. main stats';
  div {
    background-color: salmon;
    border: 2px s0olid black;
  }
  .info {
    grid-area: info;
  }
  .main {
    grid-area: main;
  }
  .portrait {
    grid-area: portrait;
  }
  .stats {
    grid-area: stats;
  }
`
const InfoSection = (props: { card: ICoreHeroscapeCard }) => {
  return (
    <InfoDiv>
      <div>{props.card.race}</div>
      <div>{props.card.type}</div>
      <div>{props.card.cardClass}</div>
      <div>{props.card.personality}</div>
      <div>
        Height: {props.card.height.split(' ')[1]}{' '}
        {props.card.height.split(' ')[0]}
      </div>
    </InfoDiv>
  )
}
const InfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  div {
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`
const MainSection = (props: { card: ICoreHeroscapeCard }) => {
  return (
    <MainDiv>
      <div>{props.card.general}</div>
      <div>{props.card.name}</div>
      <AbilitiesAccordion card={props.card} />
    </MainDiv>
  )
}
const MainDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  div {
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`
const AbilitiesAccordion = (props: { card: ICoreHeroscapeCard }) => {
  return (
    <>
      <Accordion
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
        defaultActiveKey="-1"
      >
        {props.card.abilities.map((ability, index) => (
          <>
            <Accordion.Toggle eventKey={index.toString()}>
              {ability.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <p>{ability.desc}</p>
            </Accordion.Collapse>
          </>
        ))}
      </Accordion>
    </>
  )
}
const Portrait = (props: { card: ICoreHeroscapeCard }) => {
  return (
    <>
      <img
        src={`/heroscape-portraits/${props.card.image}`}
        className="text-center h-100"
      />
    </>
  )
}
const Stats = (props: { card: ICoreHeroscapeCard }) => {
  return (
    <StatsDiv>
      <div>{props.card.life} LIFE</div>
      <div>Move: {props.card.move}</div>
      <div>Range: {props.card.range}</div>
      <div>Attack: {props.card.attack}</div>
      <div>Defense: {props.card.defense}</div>
    </StatsDiv>
  )
}
const StatsDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  div {
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`
