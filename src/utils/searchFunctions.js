export function gallerySearchChange(event) {
	event.preventDefault()
	const gallerySearchValue = event.target.value || ""
	this.setState({ gallerySearchValue: gallerySearchValue })
}

export function gallerySearchFormSubmit(event) {
	event.preventDefault()
	const { value } = event.target.search
	const regexp = new RegExp(`${value}`, "i")

	const cardsByName = this.state.firebaseCoreCards.filter(filterByCardName)
	const cardsByGeneral = this.state.firebaseCoreCards.filter(
		filterByCardGeneral
	)
	const cardsByClass = this.state.firebaseCoreCards.filter(filterByCardClass)
	const cardsByRace = this.state.firebaseCoreCards.filter(filterByCardRace)
	const cardsByPersonality = this.state.firebaseCoreCards.filter(
		filterByCardPersonality
	)
	const cardsByAbilities = this.state.firebaseCoreCards.filter(
		filterByAbilities
	)
	const filteredCards = cardsByName
		.concat(cardsByGeneral)
		.concat(cardsByClass)
		.concat(cardsByRace)
		.concat(cardsByPersonality)
		.concat(cardsByAbilities)
		.filter(makeArrayUnique)
	this.setState({ cardsToDisplay: filteredCards })

	function filterByCardName(element) {
		return element.name.match(regexp)
	}
	function filterByCardGeneral(element) {
		return element.general.match(regexp)
	}
	function filterByCardRace(element) {
		return element.race.match(regexp)
	}
	function filterByCardClass(element) {
		return element.cardClass.match(regexp)
	}
	function filterByCardPersonality(element) {
		return element.personality.match(regexp)
	}
	function filterByAbilities(card) {
		return card.abilities.some(ability => {
			return ability.name.match(regexp) || ability.desc.match(regexp)
		})
	}

	function makeArrayUnique(value, index, self) {
		return self.indexOf(value) === index
	}
}
