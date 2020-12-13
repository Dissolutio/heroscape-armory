import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
