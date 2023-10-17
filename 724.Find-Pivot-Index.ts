function pivotIndex(nums: number[]): number {
    let pivotIndex: number = -1

    let sumPrefix : number[] = new Array(nums.length)
    let currentSum = 0

    nums.forEach((num, index) => {
        currentSum += num
        sumPrefix[index] = currentSum
    })

    for (let i = 0; i < nums.length; i++) {
        //@ts-ignore
        if((sumPrefix[i-1] || 0 )=== sumPrefix.at(-1) - sumPrefix[i]){ pivotIndex= i
        break;
        }
    }

    return pivotIndex
}


console.log(pivotIndex([2, 3, 4, 5]))