import React from 'react'

import { ICoreHeroscapeCard } from '../../../assets/coreHeroscapeCards'
import { OldGalleryCard } from './OldGalleryCard'
import './OldGallery.scss'

interface Props {
  cards: ICoreHeroscapeCard[]
}

export const OldGallery = (props: Props) => {
  const { cards } = props
  return (
    <ul className="gallery-list-grid">
      {cards.map((card) => (
        <OldGalleryCard key={card.cardID} card={card} />
      ))}
    </ul>
  )
}
