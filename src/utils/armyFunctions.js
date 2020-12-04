export function clearArmy() {
  setArmy([])
}

export function removeFromArmy(card) {
  const currentArmy = this.state.currentArmy
  const nameToMatch = card.name
  currentArmy.cards.forEach((cardToAdd, index) => {
    if (cardToAdd.name === nameToMatch) {
      currentArmy.cards[index].count -= 1
    }
  })
  currentArmy.cards = currentArmy.cards.filter((card) => card.count >= 1)
  this.setState({ currentArmy }, this.setLocalArmyFromState())
}

export function addToArmy(card) {
  const currentArmy = this.state.currentArmy
  const nameToMatch = card.name
  const inArmyAlready = currentArmy.cards.some((cardToAdd) => {
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
