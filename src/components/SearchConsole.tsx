import React from 'react'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BsSearch } from 'react-icons/bs'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'

export const SearchConsole = () => {
  const { darkModeBSClassNames } = useUIContext()
  const { addFilter } = useDeckContext()
  const searchId = 'allSearch'
  const handleAddFilterSubmit = (event) => {
    event.preventDefault()
    const text = event.target.elements[searchId].value
    addFilter(text, 'all')
  }

  return (
    <Container className={`${darkModeBSClassNames} mt-2 mb-2`}>
      <Form inline onSubmit={handleAddFilterSubmit}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              <BsSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="text"
            id={searchId}
            placeholder="Search"
            className="mr-sm-2"
          />
        </InputGroup>
        <HSFactionSearchButtons />
      </Form>
    </Container>
  )
}

export const HSFactionSearchButtons = () => {
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
      <Dropdown.Toggle className={`bg-secondary`} id="dropdown-custom-1">
        Sort by faction
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0">
        {factionList.map((factionName) => (
          <FactionDropdownItem factionName={factionName} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

const FactionDropdownItem = (props: { factionName: string }) => {
  const { factionName } = props
  const { setFilters } = useDeckContext()
  const { darkMode } = useUIContext()
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
