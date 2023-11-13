// const nums = [1, 0, 1, 0, 1]
// const goal = 2
// const nums = [0, 0, 0, 0, 0]
// const goal = 0
// const nums = [0, 1, 1, 1, 1]
// const goal = 3
const nums = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
const goal = 0

function numSubarraysWithSum(nums: number[], goal: number): number {
    let ans = 0

    let prefixSum = new Map<number, number>()
    prefixSum.set(0, 1)
    let current = 0

    nums.forEach(e => {
        current += e
        if (prefixSum.has(current)) {
            //@ts-ignore
            prefixSum.set(current, prefixSum.get(current) + 1)
        } else {
            prefixSum.set(current, 1)
        }
    })

    console.log(prefixSum)

    if (goal === 0) {
        prefixSum.forEach(e => {
            let n = e - 1
            ans += (n * (n + 1)) / 2
        })
    } else {
        prefixSum.forEach((value, key) => {
            if (prefixSum.has(key - goal)) {
                //@ts-ignore
                ans += value * prefixSum.get(key - goal)
            }
        })
    }

    return ans
}

console.log("ans", numSubarraysWithSum(nums, goal))
