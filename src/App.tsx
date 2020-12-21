import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  UIContextProvider,
  ArmySelectContextProvider,
  DeckContextProvider,
  useUIContext,
} from './hooks'
import { NavBar, ModalDisplay, GalleryPage } from './components'
import { SignUpForm, SignInForm, PasswordForgetForm } from './firebase'
import { ROUTES } from './routes'
import './scss/heroscapeFactionStyles.scss'

const App = () => {
  return (
    <UIContextProvider>
      <DeckContextProvider>
        <ArmySelectContextProvider>
          <Router>
            <AppWrapper>
              <NavBar />
              <ModalDisplay />
              <Switch>
                <Route exact path={ROUTES.MAINGALLERY}>
                  <GalleryPage />
                </Route>
                <Route exact path={ROUTES.SIGN_UP}>
                  <SignUpForm />
                </Route>
                <Route exact path={ROUTES.SIGN_IN}>
                  <SignInForm />
                </Route>
                <Route exact path={ROUTES.PASSWORD_FORGET}>
                  <PasswordForgetForm />
                </Route>
                <Route path={ROUTES.PASSWORD_FORGET}>
                  <PasswordForgetForm />
                </Route>
                <Route path="*">
                  <div>404 Not Found</div>
                </Route>
              </Switch>
            </AppWrapper>
          </Router>
        </ArmySelectContextProvider>
      </DeckContextProvider>
    </UIContextProvider>
  )
}

const AppWrapper = ({ children }) => {
  const { darkMode } = useUIContext()
  const bgColor = () => (darkMode ? 'var(--black)' : 'var(--white)')
  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgColor() }}>
      {children}
    </div>
  )
}

export default App
