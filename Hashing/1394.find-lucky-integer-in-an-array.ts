// const arr = [2, 2, 3, 4]
const arr = [2,2,2,3,3]

const findLucy = (arr: number[]): number => {
    let ans = -1
    let map = new Map()
    arr.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })

    map.forEach((key, value) => {
        if(key === value && value > ans){
            ans = value
        }
    })

    return ans
}

console.time()
console.log(findLucy(arr))
console.timeEnd()