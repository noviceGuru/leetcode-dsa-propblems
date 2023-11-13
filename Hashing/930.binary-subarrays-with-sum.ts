// const nums = [1, 0, 1, 0, 1]
// const goal = 2
// const nums = [0, 0, 0, 0, 0]
// const goal = 0
// const nums = [0, 1, 1, 1, 1]
// const goal = 3
const nums = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
const goal = 0

function numSubarraysWithSum(nums: number[], goal: number): number {
    let result = 0
    
    let currSum = 0
    const sumsMap = new Map()
    sumsMap.set(0, 1)

    nums.forEach(num => {
        currSum += num
        result += sumsMap.get(currSum - goal) ?? 0
        sumsMap.set(currSum, (sumsMap.get(currSum) ?? 0) + 1)
    })

    return result
}

console.log("ans", numSubarraysWithSum(nums, goal))
