const jewels = "aA"
const stones = "aAAbbbb"

function numJewelsInStones(jewels: string, stones: string): number {
    let picked = 0
    let jewelsArr = [...jewels]
    let stoneHash = new Map()
    let stoneArr = [...stones]
    for (let stone of stoneArr){
        if(stoneHash.has(stone)){
            stoneHash.set(stone, stoneHash.get(stone) +1)
        } else{
            stoneHash.set(stone, 1)
        }
    }

    jewelsArr.forEach(jewel=> {
        picked += stoneHash.get(jewel) || 0
    })

    return picked
}

console.log(numJewelsInStones(jewels, stones))