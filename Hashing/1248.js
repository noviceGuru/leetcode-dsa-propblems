const data = [
    {
        nums: [1, 1, 2, 1, 1],
        k: 3
    },
    {
        nums: [2, 4, 6],
        k: 1
    },
    {
        nums: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
        k: 2
    }
]
let toApply = data[0]

const numberOfSubarraysWithKDistinct = (nums, k) => {
    let ans = 0
    let curr = 0
    let ansCounts = new Map()
    ansCounts.set(0, 1)

    for (const num of nums) {
        curr += num%2
        ans += ansCounts.get(curr - k) || 0
        ansCounts.set(curr, (ansCounts.get(curr) || 0) +1)
    }
    return ans
}

console.log(numberOfSubarraysWithKDistinct(toApply.nums, toApply.k))

// NOT POSSIBLE WITH SLIDING WINDOW AT ALL