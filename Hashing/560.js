// const nums = [1, 2, 1, 2, 1]
// const k = 3

const nums = [1, 2, 1, 2, 1]
const k = 3

let counts = new Map()
counts.set(0, 1)
let curr = 0
let correctSubArrays = 0

for (const num of nums) {
    curr += num
    correctSubArrays += counts.get(curr - k) || 0
    counts.set(curr, (counts.get(curr) || 0) + 1)
}

console.log(correctSubArrays)