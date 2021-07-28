// takes in array of objects & returns boolean
function validateLineup(lineup) {
        // 1) The total salary of all players in a lineup may not exceed $45,000
    let salary = lineup.reduce((acc, player) => acc + player.salary,0)
    let teamRule = true
    for(let i = 0; i < lineup.length; i++) {
        if(lineup.filter(player => player.teamId === lineup[i].teamId).length > 2) {
            teamRule = false
        }
    }


return salary < 45000 && teamRule
}

// 2) Lineups may not contain more than 2 players from a single team
// 3) Lineups may not contain more than 3 players from a single game
// 4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'

module.exports = validateLineup