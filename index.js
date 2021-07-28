// takes in array of objects & returns boolean
function validateLineup(lineup) {
    let salary = lineup.reduce((acc, player) => acc + player.salary,0)
    let teamRule = true
    let gameRule = true

            // too many players = >9 too few = <9     'OF' !== 3 (false) 
            if(lineup.length > 9 || lineup.length < 9) {
                return false
            }
    
    for(let i = 0; i < lineup.length; i++) {
        if(lineup.filter(player => player.teamId === lineup[i].teamId).length > 2) {
            teamRule = false
        }
        if(lineup.filter(player => player.gameId === lineup[i].gameId).length > 3) {
            gameRule = false
        }
        // if(lineup.filter(player => player.position))
    }




return salary < 45000 && teamRule && gameRule
}

const outfield = 3

// 4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'

module.exports = validateLineup