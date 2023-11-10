const input = [1, 2, 3, 1]
function containsDuplicate(nums: number[]): boolean {
    let ans = false
    let set = new Set()
    nums.forEach(num=> {
        if(set.has(num)){
            ans = true
            return
        }else{
            set.add(num)
        }
    })

    return ans
}

console.log(containsDuplicate(input))
