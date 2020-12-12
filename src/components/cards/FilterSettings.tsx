import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Badge from 'react-bootstrap/Badge'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'
import { BsSearch } from 'react-icons/bs'

export const FilterSettings = () => {
  const { darkModeBSClassNames } = useUIContext()
  const { filters, addFilter } = useDeckContext()
  const handleAddFilterSubmit = (event) => {
    console.log(
      `🚀 ~ file: FilterSettings.tsx ~ line 18 ~ handleAddFilterSubmit ~ event`,
      event,
    )
    addFilter('deathwalker', 'all')
  }

  return (
    <Container className={`${darkModeBSClassNames} mt-2 mb-2`}>
      <h2 className={`text-center border-bottom`}>Search</h2>
      {filters.map((filter) => (
        <Badge>{`${filter.fields}, '${filter.value}'`}</Badge>
      ))}
      <Container className={`${darkModeBSClassNames} p-2`}>
        <Tabs defaultActiveKey="addFilters" id="uncontrolled-tab-example">
          <Tab eventKey="addFilters" title="Text Filters">
            <Button size="sm" onClick={handleAddFilterSubmit}>
              {/* <BootstrapSearchBarWithIcon /> */}
              ALL, 'deathwalker'
            </Button>
            <Button size="sm" onClick={() => addFilter('death', 'name')}>
              Name, 'death'
            </Button>
            <BootstrapSearchBarWithIcon />
          </Tab>
          <Tab eventKey="generalFilters" title="By General">
            <GeneralFilterButtons />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}

const GeneralFilterButtons = (props) => {
  const { setFilters } = useDeckContext()
  return (
    <>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--valkrill)' }}
        onClick={() => setFilters([{ value: 'valkrill', fields: 'general' }])}
      >
        VALKRILL
      </Button>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--jandar)' }}
        onClick={() => setFilters([{ value: 'jandar', fields: 'general' }])}
      >
        JANDAR
      </Button>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--ullar)' }}
        onClick={() => setFilters([{ value: 'ullar', fields: 'general' }])}
      >
        ULLAR
      </Button>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--vydar)' }}
        onClick={() => setFilters([{ value: 'vydar', fields: 'general' }])}
      >
        VYDAR
      </Button>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--einar)' }}
        onClick={() => setFilters([{ value: 'einar', fields: 'general' }])}
      >
        EINAR
      </Button>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--utgar)' }}
        onClick={() => setFilters([{ value: 'utgar', fields: 'general' }])}
      >
        UTGAR
      </Button>
      <Button
        size="sm"
        style={{ backgroundColor: 'var(--aquilla)' }}
        onClick={() => setFilters([{ value: 'aquilla', fields: 'general' }])}
      >
        AQUILLA
      </Button>
    </>
  )
}

const BootstrapSearchBarWithIcon = () => {
  return (
    <Form inline>
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
          placeholder="Search"
          className="mr-sm-2"
        />
      </InputGroup>
    </Form>
  )
}
