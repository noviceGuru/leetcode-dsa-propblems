const nums = [1, 2, 3, 2]

function sumOfUnique(nums: number[]): number {
    let sum = 0
    let map = new Map()
    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })

    for (let [key, value] of map) {
        if (value < 2) {
            sum += key
        }
    }

    return sum
}

console.log(sumOfUnique(nums))
