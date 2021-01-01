import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from 'react-icons/bs'

import { useUIContext, useDeckContext } from 'hooks'

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
    <>
      <h3 className={`d-inline small`}>Cards: </h3>
      <Badge variant="warning" className={`small ml-2 mb-1`}>
        Showing {filteredDeck.length} items
      </Badge>
      <hr
        className={`w-100 mt-3 mb-3`}
        style={{
          borderTop: `1px solid var(--bs-secondary)`,
        }}
      />
      <Row>
        <Col xs={6}>
          <HSFactionSearchDropdown />
        </Col>
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
              />
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ViewAllCardsButton isFilter={isFilter} />
        </Col>
      </Row>
      <hr
        className={`w-100 mt-3 mb-3`}
        style={{
          borderTop: `1px solid var(--bs-secondary)`,
        }}
      />
    </>
  )
}

const ViewAllCardsButton = (props: { isFilter: boolean }) => {
  const { setFilters } = useDeckContext()
  const { isFilter } = props
  const buttonText = isFilter ? 'View all cards' : 'Viewing all cards'
  if (!isFilter) {
    return null
  }
  return (
    <Button
      variant="info"
      className={`d-block w-100 mt-3`}
      onClick={() => setFilters([])}
      disabled={!isFilter}
      // size="sm"
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
    <Dropdown as={ButtonGroup} className={`${darkModeBSClassNames} w-100`}>
      <Dropdown.Toggle className={`bg-secondary p-1`} id="dropdown-custom-1">
        <span className="small">Faction</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={`p-1 ${darkModeBSClassNames}`}>
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
