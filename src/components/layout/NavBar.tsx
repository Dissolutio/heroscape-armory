import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import { useUIContext } from 'hooks/useUIContext'

export const NavBar = () => {
  const { darkMode, darkModeBSClassNames, toggleDarkMode } = useUIContext()
  return (
    <div>
      <Navbar
        bg={darkMode ? 'secondary' : 'dark'}
        variant={darkMode ? 'dark' : 'light'}
        expand="sm"
      >
        <Navbar.Brand
          className={`${darkMode ? 'text-light' : 'text-light'}`}
          href="#"
        >
          Heroscape Armory
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          // className={darkModeBSClassNames}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto p-2">
            <Nav.Item onClick={toggleDarkMode}>
              <Nav.Link href="#">Toggle Dark Mode</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text
                  className={darkModeBSClassNames}
                  id="inputGroup-sizing-sm"
                >
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
