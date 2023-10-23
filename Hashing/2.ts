function missingNumber(nums: number[]): number {
    let setNums = new Set(nums)

    let missingNum = Math.max(...nums) + 1

    for (let i = 0; i < setNums.size; i++) {
        if (!setNums.has(i)) {
            missingNum = i
            break
        }
    }
    return missingNum
}