import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import { useAuthUserContext } from './firebase'
import { coreHeroscapeCards } from './assets/coreHeroscapeCards'
import { BootstrapGallery } from './components/cards/BootstrapGallery'
import './scss/App.scss'
import './scss/heroscapeFactionStyles.scss'

const App = () => {
  const authState = useAuthUserContext()
  console.log(`🚀 authState`, authState)
  return (
    <Container fluid className="app-wrapper">
      <Jumbotron>
        <h1 className="header">Heroscape Armory</h1>
      </Jumbotron>
      <BootstrapGallery cards={coreHeroscapeCards} />
    </Container>
  )
}

export default App
