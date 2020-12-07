import React from 'react'
import { FixedSizeList as List } from 'react-window'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useUIContext } from 'hooks/useUIContext'
import { CardGridStyle } from './CardGridStyle'
import {
  ICoreHeroscapeCard,
  coreHeroscapeCards,
} from 'assets/coreHeroscapeCards'
import { useArmySelectContext } from 'hooks/useArmySelectContext'

export const ArmyCardGallery = () => {
  const { darkModeBSClassNames } = useUIContext()
  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
      <List
        height={600}
        className={`${darkModeBSClassNames}`}
        itemCount={coreHeroscapeCards.length + 1}
        itemSize={300}
        itemData={coreHeroscapeCards}
        useIsScrolling
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  )
}

const Row = ({ data, index, isScrolling, style }) => {
  const { darkModeBSClassNames } = useUIContext()
  const card = data[index]
  return (
    <div style={style}>
      {isScrolling ? (
        'Scrolling'
      ) : card?.name ? (
        <GalleryArmyCard card={card} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

const GalleryArmyCard = (props) => {
  const card: ICoreHeroscapeCard = props.card
  const { army, addCardToArmy, removeCardFromArmy } = useArmySelectContext()
  const { darkMode } = useUIContext()
  const isInArmy = (card: ICoreHeroscapeCard): boolean => {
    return army.some((c) => c.cardID === card.cardID)
  }
  const addClickHandler = (card: ICoreHeroscapeCard) => {
    console.log(`${card.name} in army:`, isInArmy(card))
    addCardToArmy(card)
  }
  const removeClickHandler = (card: ICoreHeroscapeCard) => {
    console.log(`${card.name} in army:`, isInArmy(card))
    removeCardFromArmy(card)
  }
  return (
    <CardGridStyle>
      <div className="g1">
        <Image src={`/heroscape-portraits/${card.image}`} rounded fluid />
      </div>
      <div className="g2">
        <Badge
          variant={darkMode ? 'dark' : 'light'}
          className="d-block"
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
      </div>
      <Tab.Container defaultActiveKey="first">
        <div className="g3">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="1">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3">Tab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4">Tab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5">Tab 5</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="g4">
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <Button
                variant="outline-success"
                className="btn-block mt-3"
                onClick={() => addClickHandler(card)}
              >
                Add to Army
              </Button>
              <Button
                variant="outline-warning"
                className="btn-block mt-2 mb-2"
                onClick={() => removeClickHandler(card)}
              >
                Remove from Army
              </Button>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <p>Pane two paragraph baby</p>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              <p>Pane three paragraph baby</p>
            </Tab.Pane>
            <Tab.Pane eventKey="4">
              <p>Pane four paragraph baby</p>
            </Tab.Pane>
            <Tab.Pane eventKey="5">
              <p>Pane five paragraph baby</p>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </CardGridStyle>
  )
}
