function validateLineup(lineup) {
  // let salary = lineup.reduce((acc, player) => acc + player.salary, 0)
  let salary = true
  let length = true
  let teamRule = true
  let gameRule = true
  let outfield = true
  let outfieldPos = 0
  let otherPositions = true
  let position = 0


  for (let i = 0; i < lineup.length; i++) {
    if (lineup.salary > 45000) {
      salary = false
    }
    if (lineup.length > 9 || lineup.length < 9) {
      length = false
    }

    if (lineup.filter(player => player.teamId === lineup[i].teamId).length > 2) {
      teamRule = false
    }
    if (lineup.filter(player => player.gameId === lineup[i].gameId).length > 3) {
      gameRule = false
    }
    if (lineup.filter(player => player.position[i] === 'OF')) {
      outfieldPos = outfieldPos++
      if (outfieldPos !== 3) {
        outfield = false
      }
    }
    if (lineup.filter(player => player.position[i] !== 'OF')) {
      position = position++
      if (position !== 1) {
        otherPositions = false
      }
    }
  }

  return length && salary /* < 45000 */&& teamRule && gameRule && outfield && otherPositions
}

module.exports = validateLineup
