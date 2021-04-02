import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import {
  Firebase,
  FirebaseContext,
  useFirebaseContext,
  AuthUserContext,
  useAuthListener,
} from './firebase'
import { UIContextProvider } from './hooks/useUIContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

const firebaseApp = new Firebase()

const FirebaseContextWrapper = () => {
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      <AuthContextWrapper />
    </FirebaseContext.Provider>
  )
}

const AuthContextWrapper = () => {
  const firebaseApp = useFirebaseContext()
  const authState = useAuthListener(firebaseApp)
  return (
    <AuthUserContext.Provider value={authState}>
      <UIContextProvider>
        <Router>
          <App />
        </Router>
      </UIContextProvider>
    </AuthUserContext.Provider>
  )
}

ReactDOM.render(<FirebaseContextWrapper />, document.getElementById('root'))
