import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Firebase, FirebaseContext, useFirebaseContext, AuthUserContext, useAuthListener } from './firebase'
import { UIContextProvider } from './hooks/useUIContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'normalize.css'

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

ReactDOM.render(
  <React.StrictMode>
<FirebaseContextWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
