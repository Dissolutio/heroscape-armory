import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  UIContextProvider,
  ArmySelectContextProvider,
  DeckContextProvider,
  useUIContext,
} from './hooks'
import { NavBar, ModalDisplay, GalleryPage } from './components'
import { ROUTES } from './routes'
import './css/heroscapeFactionStyles.css'
import { CardData } from 'components/card-data/CardData'

const App = () => {
  return (
    <UIContextProvider>
      <DeckContextProvider>
        <ArmySelectContextProvider>
          <Router>
            <Layout>
              <ModalDisplay />
              <Switch>
                <Route exact path={ROUTES.MAIN_GALLERY}>
                  <GalleryPage />
                </Route>
                <Route exact path={ROUTES.CARD_DATA}>
                  <CardData />
                </Route>
                <Route path="*">
                  <div>404 Not Found</div>
                </Route>
              </Switch>
            </Layout>
          </Router>
        </ArmySelectContextProvider>
      </DeckContextProvider>
    </UIContextProvider>
  )
}

const Layout = ({ children }) => {
  const { darkMode } = useUIContext()
  const bgColor = () => (darkMode ? 'var(--black)' : 'var(--white)')
  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgColor() }}>
      <NavBar />
      {children}
    </div>
  )
}

export default App
