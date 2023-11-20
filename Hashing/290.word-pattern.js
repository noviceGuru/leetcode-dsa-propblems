// const pattern = "aba",
//     s = "dog cat cat"

// const pattern = "abba",
//     s = "dog cat cat dog"

// const pattern = "abc",
//     s = "b c a"

    // const pattern = "abba",
//     s = "dog cat cat fish"

const pattern = "abba",
    s = "dog dog dog dog"

function wordPattern(pattern, s) {
    let patArr = [...pattern]
    let sArr = s.split(' ')
    if(patArr.length !== sArr.length) return false

    let patMap = new Map()

    for (let i = 0; i < patArr.length; i++) {
        if(patMap.has(patArr[i])){
            if(patMap.get(patArr[i]) !== sArr[i]){
                return false
            }
        }else{
            patMap.set(patArr[i], sArr[i])
        }
    }
    const values = Array.from(patMap.values())

    return values.length === new Set(values).size
}

console.log(wordPattern(pattern, s))