// const grid = [
//     [3, 2, 1],
//     [1, 7, 6],
//     [2, 7, 7],
// ]

// const grid = [
//     [3, 1, 2, 2],
//     [1, 4, 4, 5],
//     [2, 4, 2, 2],
//     [2, 4, 2, 2],
// ]

const grid = [
    [11, 1],
    [1, 11],
]

function equalPairs(grid: number[][]): number {
    let equals = 0
    let map = new Map()

    //rows
    grid.forEach(row => {
        if (map.has(row.join(","))) {
            map.set(row.join(","), map.get(row.join(",")) + 1)
        } else {
            map.set(row.join(","), 1)
        }
    })

    console.log(map)

    //columns
    for (let j = 0; j < grid.length; j++) {
        let col = grid.map(row => row[j])
        if (map.has(col.join(","))) {
            equals += map.get(col.join(","))
        }
    }
    return equals
}

console.log(equalPairs(grid))
