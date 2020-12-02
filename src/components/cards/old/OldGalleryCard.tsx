import React from 'react'
// import { Image } from "cloudinary-react";
import { ICoreHeroscapeCard } from '../../../assets/coreHeroscapeCards'

type Props = {
  card: ICoreHeroscapeCard
  toggleModalCard?: () => void
  addToArmy?: (card: ICoreHeroscapeCard) => void
}

export const OldGalleryCard = (props: Props) => {
  const { card, toggleModalCard = () => {}, addToArmy = () => {} } = props

  const { name, image, general, points } = props.card
  return (
    <li
      className={`gallery-card-wrapper ${general}-frame`}
      key={name}
      onClick={toggleModalCard}
    >
      <h2 className="gallery-card-title">{name}</h2>
      {/* <Image
        cloudName="mystery-maintenance"
        publicId={`${image}`}
        className="gallery-card-portrait"
        alt={name}
      /> */}
      <img
        src={`/heroscape-portraits/${image}`}
        className="fullcard-portrait"
        alt={name}
      />
      <div className="gallery-card-points">{points} points</div>
      <button
        className="gallery-card-button increment-button"
        onClick={() => addToArmy(card)}
      >
        +
      </button>
    </li>
  )
}
