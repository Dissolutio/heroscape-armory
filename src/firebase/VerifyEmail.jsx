import React, { useState } from 'react'

import { useFirebaseContext } from './context'

export const  VerifyEmail = () => {
	const [isSent, setIsSent] = useState(false)
	const firebaseApp = useFirebaseContext()
	const sendEmail = event => {
		event.preventDefault()
		firebaseApp.doSendEmailVerification()
		setIsSent(true)
	}
	return isSent ? (
		<div>Verification Email Sent!</div>
	) : (
		<div>
			<button onClick={sendEmail}>Send Verification Email</button>
		</div>
	)
}
