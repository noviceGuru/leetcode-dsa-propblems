const nums = [5, 7, 3, 9, 4, 9, 8, 3, 1]

const findLargest = nums => {
    const numsSet = new Set(nums)
    if(numsSet.size === 0) {
        return -1
    }

    const numsHashMap = new Map()

    nums.forEach(num => {
        if (numsHashMap.has(num)) {
            numsHashMap.set(num, numsHashMap.get(num) + 1)
        } else {
            numsHashMap.set(num, 1)
        }
    })

    let largestUnique = 0
    numsSet.forEach(num => {
        if (numsHashMap.get(num) === 1 && num > largestUnique) {
            largestUnique = num
        }
    })
    return largestUnique
}

console.log(findLargest(nums))