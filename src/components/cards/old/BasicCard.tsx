import React from 'react'
import {
  CardAbility,
  ICoreHeroscapeCard,
} from '../../../assets/coreHeroscapeCards'

interface Props {
  card: ICoreHeroscapeCard
  addToArmy?: (card: ICoreHeroscapeCard) => void
  removeFromArmy?: (card: ICoreHeroscapeCard) => void
}

export const BasicCard = (props: Props) => {
  const { card, addToArmy, removeFromArmy } = props
  const { abilities, general } = card

  return (
    <div className={`fullcard-wrapper  ${general}-frame`}>
      <StatsSection
        addToArmy={addToArmy}
        removeFromArmy={removeFromArmy}
        card={card}
      />
      <AbilitySection abilities={abilities} />
    </div>
  )
}

const StatsSection = (props: Props) => {
  const { card, addToArmy = () => {}, removeFromArmy = () => {} } = props
  const {
    name,
    image,
    general,
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
    figures,
    hexes,
    setWave,
  } = card
  return (
    <div className="fullcard-stats-section">
      <div className="fullcard-detail-list">
        <h2 className="fullcard-title">{name}</h2>
        {/* <Image
					cloudName="mystery-maintenance"
					publicId={`${image}`}
					className="fullcard-portrait"
					alt={name}
				/> */}
        <img
          src={`/heroscape-portraits/${image}`}
          className="fullcard-portrait"
          alt={name}
        />
        <span className="fullcard-points-span">
          {points} <small>points</small>
        </span>

        <span className="fullcard-detail-span">{type}</span>
        <span className="fullcard-detail-span">{cardClass}</span>
        <span className="fullcard-detail-span">{personality}</span>
        <span className="fullcard-detail-span">{race}</span>
        <div className="army-item-btn-wrapper">
          <button
            className="decrement-button"
            onClick={() => removeFromArmy(card)}
          >
            -
          </button>
          <span>{'{Army count}'}</span>
          <button className="increment-button" onClick={() => addToArmy(card)}>
            +
          </button>
        </div>
      </div>
      <div className="fullcard-stats-list">
        <span className="fullcard-stats-list-item">Life: {life}</span>
        <span className="fullcard-stats-list-item">Range: {range}</span>
        <span className="fullcard-stats-list-item">Move: {move}</span>
        <span className="fullcard-stats-list-item">Attack: {attack}</span>
        <span className="fullcard-stats-list-item">Defense: {defense}</span>
        <span className="fullcard-stats-list-item">
          Height: {height.split(' ')[1]} {height.split(' ')[0]}
        </span>
      </div>
    </div>
  )
}

interface AbilitySectionProps {
  abilities: CardAbility[]
}

const AbilitySection = (props: AbilitySectionProps) => {
  const { abilities } = props
  if (!(abilities?.length > 0)) {
    return null
  }
  return (
    <ul>
      {abilities &&
        abilities.map((ability) => (
          <li key={ability.name} className="fullcard-abilities-wrapper">
            <h2 className="fullcard-ability-title">{ability.name}</h2>
            <hr />
            <p>{ability.desc}</p>
          </li>
        ))}
    </ul>
  )
}
