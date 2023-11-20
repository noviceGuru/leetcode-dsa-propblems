// let s = "abcd", order = "cba"
let order = "kqep",
    s = "pekeq"

function customSortString(order: string, s: string) {
    let sArr = [...s]
    let sMap = new Map()
    sArr.forEach(char => {
        sMap.set(char, (sMap.get(char) || 0) + 1)
    })

    let sOrder = new Set([...order])
    
    let outMap = new Map<string, number>()

    sOrder.forEach(char => {
        if (sMap.has(char)) {
            outMap.set(char, sMap.get(char))
            sMap.delete(char)
        }
    })

    let output: string[] = []

    outMap.forEach((value, key)=>{
        let arrToAdd = new Array(value).fill(key)
        output.push(...arrToAdd)
    })

    sMap.forEach((value, key)=>{
        let arrToAdd = new Array(value).fill(key)
        output.push(...arrToAdd)
    })


    
    return output.join("")
}

console.log(customSortString(order, s))
