import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import { useUIContext } from 'hooks/useUIContext'
import { ROUTES } from 'routes'

export const NavBar = () => {
  const { darkMode, toggleDarkMode } = useUIContext()
  return (
    <div>
      <Navbar
        bg={darkMode ? 'secondary' : 'dark'}
        variant={darkMode ? 'dark' : 'light'}
        expand="sm"
      >
        <Navbar.Brand
          className={`${darkMode ? 'text-light' : 'text-light'}`}
          as={Link}
          to={ROUTES.MAIN_GALLERY}
        >
          Heroscape Armory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto p-2">
            <Nav.Item>
              <Button
                variant={darkMode ? 'dark' : 'light'}
                onClick={toggleDarkMode}
              >
                Toggle Dark Mode
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/data">
                Data
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const FirebaseAuthPageNavLinkList = () => {
  return (
    <>
      <Nav.Item>
        <Nav.Link as={Link} to={ROUTES.SIGN_UP}>
          Sign up
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to={ROUTES.SIGN_IN}>
          Sign in
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to={ROUTES.PASSWORD_FORGET}>
          Forgot Password
        </Nav.Link>
      </Nav.Item>
    </>
  )
}
