const input = [1, 2, 2, 1, 1, 3]

function uniqueOccurrences(arr: number[]): boolean {
    let map = new Map()
    arr.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })
    let set = new Set(map.values())
    return set.size === map.size
}

console.log(uniqueOccurrences(input))
