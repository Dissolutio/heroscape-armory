import React from 'react';

import { useAuthUserContext } from './firebase'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const App = () => {
  const authState = useAuthUserContext()
  console.log(`🚀 ~ file: App.tsx ~ line 9 ~ App ~ authState`, authState)
  return (
    <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Heroscape Armory</h1>
    </Jumbotron>
  </Container>
)
}

export default App;