import React from 'react'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { BsSearch } from 'react-icons/bs'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { HSFactionSearchButtons } from './HSFactionSearchButtons'

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
      <BootstrapSearchBarWithIcon
        onSubmit={handleAddFilterSubmit}
        searchId={searchId}
      />
    </Container>
  )
}

const BootstrapSearchBarWithIcon = ({ onSubmit, searchId }) => {
  return (
    <Form inline onSubmit={onSubmit}>
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
  )
}
