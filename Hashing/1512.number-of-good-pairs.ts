const nums = [1,2,3,1,1,3]

function numIdenticalPairs(nums: number[]): number {
    let ans = 0
    let map = new Map()
    nums.forEach(num=>{
        if(map.has(num)){
            ans += map.get(num)
            map.set(num, map.get(num) +1)
        } else {
            map.set(num, 1)
        }
    })

    return ans
}

console.log(numIdenticalPairs(nums))