const coutnNPluseOne = (nums: number[]): number => {
    let trueNums: number = 0
    let setNums = new Set(nums)

    nums.forEach((num, index) => {
        if (setNums.has(num + 1)) {
            trueNums++
        }
    })
    return trueNums
}

// const input = [1,1,3,3,5,5,7,7]
const input = [1, 2, 3]

console.log(coutnNPluseOne(input))
