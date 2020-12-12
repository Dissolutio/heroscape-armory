import React from 'react'
import { useAuthUserContext, useFirebaseContext } from '.'

const CurrentUserReadout = () => {
    const firebaseApp = useFirebaseContext()
    const { user } = useAuthUserContext()
    return (
        <div>
            {user ? (
                <>
                    <small>You are signed in as: {user.username}</small>
                    <button onClick={firebaseApp.doSignOut}>Sign Out</button>
                </>
            ) : (
                <small>You are not signed in.</small>
            )}
        </div>
    )
}

export default CurrentUserReadout
