import React from 'react'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from 'react-icons/bs'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'

export const SearchConsole = () => {
  const { filters, addFilter, filteredDeck } = useDeckContext()
  const searchId = 'allSearch'
  const handleAddFilterSubmit = (event) => {
    event.preventDefault()
    const text = event.target.elements[searchId].value
    addFilter(text, 'all')
  }
  const isFilter = filters.length > 0
  return (
    <Container className={` mt-2 mb-2 border-bottom`}>
      <Row>
        <Col xs={6}>
          <Form inline onSubmit={handleAddFilterSubmit}>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text id="search-bar">
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="search-bar"
                type="text"
                id={searchId}
                placeholder="Search"
              />
            </InputGroup>
          </Form>
        </Col>
        <Col xs={6}>
          <HSFactionSearchDropdown />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Badge variant="warning" className={`small`}>
            Showing {filteredDeck.length} items
          </Badge>
        </Col>
        <Col xs={6}>
          <ViewAllCardsButton isFilter={isFilter} />
        </Col>
      </Row>
    </Container>
  )
}

const ViewAllCardsButton = (props: { isFilter: boolean }) => {
  const { darkMode } = useUIContext()
  const { setFilters } = useDeckContext()
  const { isFilter } = props
  const buttonText = isFilter ? 'View all cards' : 'Viewing all cards'
  if (!isFilter) {
    return null
  }
  return (
    <Button
      variant={
        darkMode ? (isFilter ? 'info' : 'secondary') : isFilter ? '' : ''
      }
      className={`m-1`}
      onClick={() => setFilters([])}
      disabled={!isFilter}
      size="sm"
    >
      {buttonText}
    </Button>
  )
}

export const HSFactionSearchDropdown = () => {
  const { darkModeBSClassNames } = useUIContext()
  const factionList = [
    'jandar',
    'ullar',
    'vydar',
    'einar',
    'aquilla',
    'utgar',
    'valkrill',
  ]
  return (
    <Dropdown as={ButtonGroup} className={`${darkModeBSClassNames}`}>
      <Dropdown.Toggle className={`bg-secondary m-1`} id="dropdown-custom-1">
        Select faction
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0">
        {factionList.map((factionName, index) => (
          <FactionDropdownItem key={index} factionName={factionName} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

const FactionDropdownItem = (props: { factionName: string }) => {
  const { factionName } = props
  const { setFilters } = useDeckContext()
  return (
    <Dropdown.Item
      eventKey={factionName}
      style={{ backgroundColor: `var(--${factionName})` }}
      onClick={() =>
        setFilters([{ value: `${factionName}`, fields: 'general' }])
      }
    >
      {factionName.toUpperCase()}
    </Dropdown.Item>
  )
}
