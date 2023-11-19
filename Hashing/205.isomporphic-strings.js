// const s = "egg",
//     t = "add"

const s = "badc",
    t = "baba"

// const s = "bbbaaaba",
//     t = "aaabbbba"

function isIsomorphic(s, t) {
    let ans = true
    let arr1 = [...s]
    let arr2 = [...t]

    let set1 = new Set([...s])
    let set2 = new Set([...t])

    if (set1.size !== set2.size) return false

    let map = new Map()
    arr1.forEach((char, index) => {
        if (!map.has(char)) {
                map.set(char, arr2[index])
        } else {
            if (map.get(char) !== arr2[index]) {
                ans = false
                return ans
            }
        }
    })

    return ans
}

console.log(isIsomorphic(s, t))
