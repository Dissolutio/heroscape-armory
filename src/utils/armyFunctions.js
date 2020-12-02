export function clearArmy() {
	this.setState({
		currentArmy: {
			maxPoints: 500,
			cards: []
		}
	})
}

export function setLocalArmyFromState() {
	const updatedArmy = JSON.stringify(this.state.currentArmy)
	localStorage.setItem("army", updatedArmy)
}

export function setArmyStateFromLocal() {
	const armyLocal = JSON.parse(localStorage.getItem("army"))
	const currentArmy = this.state.currentArmy
	try {
		if (armyLocal.cards && armyLocal.cards.length) {
			this.setState({ currentArmy: armyLocal })
		}
	} catch (err) {
		console.log("Could not sync to local army")
	}
}

export function removeFromArmy(card) {
	const currentArmy = this.state.currentArmy
	const nameToMatch = card.name
	currentArmy.cards.forEach((cardToAdd, index) => {
		if (cardToAdd.name === nameToMatch) {
			currentArmy.cards[index].count -= 1
		}
	})
	currentArmy.cards = currentArmy.cards.filter(card => card.count >= 1)
	this.setState({ currentArmy }, this.setLocalArmyFromState())
}

export function addToArmy(card) {
	const currentArmy = this.state.currentArmy
	const nameToMatch = card.name
	const inArmyAlready = currentArmy.cards.some(cardToAdd => {
		return cardToAdd.name === nameToMatch
	})
	if (inArmyAlready) {
		currentArmy.cards.forEach((cardToAdd, index) => {
			if (cardToAdd.name === nameToMatch) {
				currentArmy.cards[index].count += 1
			}
		})
	} else {
		card.count = 1
		currentArmy.cards.push(card)
	}
	this.setState({ currentArmy }, this.setLocalArmyFromState())
}
