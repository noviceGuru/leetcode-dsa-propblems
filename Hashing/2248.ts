const nums = [
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
]

function intersection(nums: number[][]): number[] {
    let map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            map.set(nums[i][j], (map.get(nums[i][j]) || 0) + 1)
        }
    }

    const numsLength = nums.length
    let ans : number[] = []
    for (const [key, value] of map) {
        if (value === numsLength) {
            ans.push(key)
        }
    }

    return ans.sort()
}

console.log(intersection(nums))
