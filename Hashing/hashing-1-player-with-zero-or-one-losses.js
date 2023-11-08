// const matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]
const matches = [[1, 2], [2, 1], [1, 3], [3, 1], [2, 3], [3, 2]]

const findWinners = matches => {
    let allTeams = new Set()

    matches.forEach(match => {
        allTeams.add(match[0])
        allTeams.add(match[1])
    })

    let winnersHash = new Map()

    matches.forEach(match => {
        if (winnersHash.has(match[1])) {
            winnersHash.set(match[1], winnersHash.get(match[1]) + 1)
        } else {
            winnersHash.set(match[1], 1)
        }
    })

    let winners = []
    let oneLosers = []

    allTeams.forEach(team => {
        if (winnersHash.get(team) === 1) {
            oneLosers.push(team)
        }

        if (!winnersHash.has(team)) {
            winners.push(team)
        }
    })

    const sort = arr => arr.sort((a, b) => a > b ? 1 : -1)

    return [sort(winners), sort(oneLosers)]
}

console.log(findWinners(matches))