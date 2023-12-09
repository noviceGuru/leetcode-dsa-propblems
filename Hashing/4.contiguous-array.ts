function findMaxLength(nums: number[]): number {
    if (nums.length == 0) {
        return 0
    }

    let ans = 0
    let presum = 0

    let map = new Map<number, number>()
    map.set(0, -1)

    nums.forEach((num, index) => {
        presum += num === 0 ? -1 : 1
        // console.log(presum)

        if (map.has(presum)) {
            ans = Math.max(ans, index - map.get(presum)!)
        } else {
            map.set(presum, 1)
        }
    })

    return ans
}

console.log(findMaxLength([0, 1, 1, 0, 1]))
// findMaxLength([0, 1, 1, 0, 1])
