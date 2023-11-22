// const word1 = "abc", word2 = "bca"
// const word1 = "cabbba", word2 = "abbccc"
// const word1 = "cabbba", word2 = "aabbss"
// const word1 = "uau", word2 = "ssx"

// const word1 = "abbzzca", word2 = "babzzcz"

const word1 = "aaabbbbccddeeeeefffff", word2 = "aaaaabbcccdddeeeeffff"

function closeStrings(word1, word2) {
    let ans = true
    if (word1.length !== word2.length) return false
    const len = word1.length

    let map1 = new Map()
    let map2 = new Map()

    for (let i = 0; i < len; i++) {
        map1.set(word1.charAt(i), (map1.get(word1.charAt(i)) || 0) + 1)
        map2.set(word2.charAt(i), (map2.get(word2.charAt(i)) || 0) + 1)
    }

    if (map1.size !== map2.size) return false

    const arrVals1 = Array.from(map1).sort((a, b) => a - b)
    const arrVals2 = Array.from(map2).sort((a, b) => a - b)

    arrVals1.forEach((e, index) => {
        if(e !== arrVals2[index]){
            ans = false
            return ans
        }
    })

    if (arrVals1 !== arrVals2) return false

    map1.forEach((val1, key) => {
        if (!map2.has(key)) {
            ans = false
            return ans
        }
    })


    return ans
}

console.log(closeStrings(word1, word2))