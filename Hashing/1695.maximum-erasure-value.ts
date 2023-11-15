// const input = [
//     187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411,
//     459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610,
//     31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670,
//     476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434,
// ]

// const input = [558, 508, 782, 32, 187, 103, 370, 607, 619, 267, 984, 10]

const input = [4, 2, 4, 5, 6]

// const input = [10000, 1, 10000, 1, 1, 1, 1, 1, 1]

function maximumUniqueSubarray(nums) {
    let length = nums.length
    if (length === 1) return nums[0]
    let sum = 0

    let curr = 0
    let prefixSum = new Array(length + 1)
    prefixSum[0] = 0

    let left = 0,
        right = -1

    let set = new Set()

    while (right < length) {
        if (set.has(nums[right + 1])) {
            left++
            set.delete(nums[left - 1])
        } else {
            right++
            set.add(nums[right])
            curr += nums[right]
            prefixSum[right + 1] = curr
        }
        if (prefixSum[right + 1]) {
            sum = Math.max(sum, prefixSum[right + 1] - prefixSum[left])
        }
    }

    return sum
}

console.log(maximumUniqueSubarray(input))
