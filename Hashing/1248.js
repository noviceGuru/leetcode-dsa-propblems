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

const numberOfSubarraysWithKDistinct = (nums, k) => {
    let ans = 0
    let left = 0
    let right = 0
    let count = (nums[0] % 2 !== 0) ? 1 : 0

    while (right < nums.length && left < nums.length) {
        if (count < k && nums[right + 1]) {
            right++
            if (!isNaN(nums[right]) && nums[right] % 2 !== 0) {
                count++
            }
        } else if (left < nums.length) {
            if (nums[left] % 2 !== 0) {
                count--
            }
            left++
        }

        if (count === k) {
            ans++
        }

        console.log(count === k, nums.slice(left, right + 1), 'left', left, 'right', right, 'count', count, 'ans', ans)
    }

    return ans
}

let toApply = data[2]
console.log(numberOfSubarraysWithKDistinct(toApply.nums, toApply.k))

// NOT POSSIBLE WITH SLIDING WINDOW AT ALL