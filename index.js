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
  let outfield = true
  let outfieldPos = 0
  let pitcher = true
  let pitcherPos = 0
  let catcher = true
  let catcherPos = 0
  let first = true
  let firstPos = 0
  let second = true
  let secondPos = 0
  let third = true
  let thirdPos = 0
  let shortStop = true
  let shortStopPos = 0

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
    if (Object.values(lineup).includes('OF')) {
      outfieldPos = outfieldPos++
      if (outfieldPos !== 3) {
        outfield = false
      }
    }
    // if (lineup.filter(player => player.position[i] === 'OF')) {
    //   outfieldPos = outfieldPos++
    //   if (outfieldPos !== 3) {
    //     outfield = false
    //   }
    // }
    if (Object.values(lineup).includes('P')) {
      pitcherPos = pitcherPos++
      if (pitcherPos !== 1) {
        pitcher = false
      }
    }
    // if (lineup.filter(player => player.position[i] === 'P')) {
    //   pitcherPos = pitcherPos++
    //   if (pitcherPos !== 1) {
    //     pitcher = false
    //   }
    // }
    if (Object.values(lineup).includes('C')) {
      catcherPos = catcherPos++
      if (catcherPos !== 1) {
        catcher = false
      }
    }
    // if (lineup.filter(player => player.position[i] === 'C')) {
    //   catcherPos = catcherPos++
    //   if (catcherPos !== 1) {
    //     catcher = false
    //   }
    // }
    if (Object.values(lineup).includes('1B')) {
      firstPos = firstPos++
      if (firstPos !== 1) {
        first = false
      }
    }
    // if (lineup.filter(player => player.position[i] === '1B')) {
    //   firstPos = firstPos++
    //   if (firstPos !== 1) {
    //     first = false
    //   }
    // }
    if (Object.values(lineup).includes('C')) {
      secondPos = secondPos++
      if (secondPos !== 1) {
        second = false
      }
    }
    // if (lineup.filter(player => player.position[i] === '2B')) {
    //   secondPos = secondPos++
    //   if (secondPos !== 1) {
    //     second = false
    //   }
    // }
    if (Object.values(lineup).includes('C')) {
      thirdPos = thirdPos++
      if (thirdPos !== 1) {
        third = false
      }
    }
    // if (lineup.filter(player => player.position[i] === '3B')) {
    //   thirdPos = thirdPos++
    //   if (thirdPos !== 1) {
    //     third = false
    //   }
    // }
    if (Object.values(lineup).includes('C')) {
      shortStopPos = shortStopPos++
      if (shortStopPos !== 1) {
        shortStop = false
      }
    }
    // if (lineup.filter(player => player.position[i] === 'SS')) {
    //   shortStopPos = shortStopPos++
    //   if (shortStopPos !== 1) {
    //     shortStop = false
    //   }
    // }
  }

  return length && salary < 45000 && teamRule && gameRule && outfield &&
  pitcher && catcher && first && second && third && shortStop && positionCount(lineup, testLineup)
}

module.exports = validateLineup
