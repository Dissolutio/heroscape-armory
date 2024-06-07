import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  UIContextProvider,
  ArmySelectContextProvider,
  DeckContextProvider,
  useUIContext,
} from './hooks'
import { NavBar, ModalDisplay, GalleryPage } from './components'
import {
  Firebase,
  FirebaseContext,
  useFirebaseContext,
  AuthUserContext,
  useAuthListener,
  SignUpForm,
  SignInForm,
  PasswordForgetForm,
} from './firebase'
import { ROUTES } from './routes'
import './scss/heroscapeFactionStyles.scss'

// if developing locally, with no api keys, we still want the app to load, and have done the minimal work to do so
const firebaseApp = process.env.REACT_APP_FIRE_APIKEY ? new Firebase() : {}

export const App2 = () => {
  const firebaseApp = useFirebaseContext()
  const authState = useAuthListener(firebaseApp)
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      <AuthUserContext.Provider value={authState}>
        <UIContextProvider>
          <Router>
            <App />
          </Router>
        </UIContextProvider>
      </AuthUserContext.Provider>
    </FirebaseContext.Provider>
  )
}

const App = () => {
  return (
    <UIContextProvider>
      <DeckContextProvider>
        <ArmySelectContextProvider>
          <Router>
            <Layout>
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
            </Layout>
          </Router>
        </ArmySelectContextProvider>
      </DeckContextProvider>
    </UIContextProvider>
  )
}

const Layout = ({ children }) => {
  const { darkMode, darkModeBSClassNames } = useUIContext()
  const bgColor = () => (darkMode ? 'var(--black)' : 'var(--white)')
  return (
    <StyledAppWrapper style={{ backgroundColor: bgColor() }}>
      <NavBar />
      <StyledGalleryWrapper
        className={`${darkModeBSClassNames} text-center pt-1 pb-2 mt-0`}
      >
        {children}
      </StyledGalleryWrapper>
    </StyledAppWrapper>
  )
}
const StyledAppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`
const StyledGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  height: 100%;
  /* max-height: 100vh; */
  margin: 0 auto;
`
export default App
