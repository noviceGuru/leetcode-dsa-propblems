class NumArray {
    nums: number[]
    currentSum: number
    prefixSum: number[]

    constructor(nums: number[]) {
        this.nums = nums
        this.currentSum = 0
        this.prefixSum = this.nums.map(number => {
            this.currentSum += number
            return this.currentSum
        })
    }

    sumRange(left: number, right: number): number {
        return this.prefixSum[right] - (this.prefixSum[left - 1] || 0)
    }
}

const arr = new NumArray([2, 3, 4, 5])
console.log(arr.sumRange(2, 3))
