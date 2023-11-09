let cards = [95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30, 7, 37, 26, 55, 76, 60, 43, 36, 85, 47, 96, 6]
// let cards = [1,0,5,3]

const findMinDiff = arr => {
    let diff = Math.abs(arr[1] - arr[0])
    if (arr.length === 2) return diff
    arr.sort((prev, next) => {
        diff = Math.min(diff, Math.abs(prev - next))
    })

    return diff
}

function minimumCardPickup(cards) {
    let set = new Set(cards)
    if (set.size === cards.length) return -1

    let map = new Map()
    cards.forEach((card, index) => {
        if (map.has(card)) {
            let arrVal = map.get(card)
            arrVal.push(index)
            map.set(card, arrVal)
        } else {
            map.set(card, [index])
        }
    })

    console.log(map)

    let maxDiff = 0

    map.forEach(e => {
        if (e.length > 1) {
            if (maxDiff === 0) {
                maxDiff = findMinDiff(e)
            } else {
                maxDiff = Math.min(maxDiff, findMinDiff(e))
            }
        }
    })

    return maxDiff + 1
}

console.log(minimumCardPickup(cards))