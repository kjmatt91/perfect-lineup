const testLineup = ['1B', '2B', '3B', 'C', 'OF', 'OF', 'OF', 'P', 'SS']

function positionCount(lineup, testLineup) {
  let positions = true
  let positionsArr = lineup.map(position => position.position).sort()

  if (positionsArr.length !== testLineup.length) return false

  positionsArr.forEach((postition, index) => {
    if (postition !== testLineup[index]) {
      positions = false
    }
  })

  return positions
}

function validateLineup(lineup) {
  let salary = lineup.reduce((acc, player) => acc + player.salary, 0)
  let length = true
  let teamRule = true
  let gameRule = true

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
  }

  return length && salary < 45000 && teamRule && gameRule && positionCount(lineup, testLineup)
}

module.exports = validateLineup
