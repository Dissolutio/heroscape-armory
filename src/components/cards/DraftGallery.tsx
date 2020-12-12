import React from 'react'
import { FixedSizeList as List } from 'react-window'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { useArmySelectContext } from 'hooks/useArmySelectContext'
import { CardGridStyle } from './CardGridStyle'
import { ICoreHeroscapeCard } from 'assets/coreHeroscapeCards'

export const DraftGallery = () => {
  const { filteredDeck } = useDeckContext()
  const { darkModeBSClassNames } = useUIContext()
  return (
    <div
      style={{
        // maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2 className={`text-center ${darkModeBSClassNames}`}>
        Gallery{' '}
        <span className="text-warning small">{filteredDeck.length} items</span>
      </h2>
      <List
        // useIsScrolling
        height={600}
        className={`${darkModeBSClassNames}`}
        itemCount={filteredDeck.length}
        itemSize={360}
        itemData={filteredDeck}
        width={'100%'}
      >
        {ListItemRenderer}
      </List>
    </div>
  )
}

const ListItemRenderer = ({
  data,
  // isScrolling,
  index,
  style,
}) => {
  const card = data[index]
  // if (isScrolling) {
  //   return <div style={style}>Scrolling.....</div>
  // }
  return (
    <div style={style}>
      {card && card?.name ? (
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
  const { darkModeBSClassNames } = useUIContext()
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
    <Card key={card.name} className={`${darkModeBSClassNames}`}>
      <Card.Header
        className={`${darkModeBSClassNames} border-white border-top border-bottom`}
      >
        {card.name}
      </Card.Header>
      <Card.Body>
        <CardGridStyle>
          <div className="g1">
            <Card.Img
              src={`/heroscape-portraits/${card.image}`}
              className="shadow-md text-center"
            />
          </div>

          <div className="g2">
            <Badge className="d-block" style={{ textTransform: 'capitalize' }}>
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
