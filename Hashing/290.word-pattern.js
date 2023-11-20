// const pattern = "aba",
//     s = "dog cat cat"

    const pattern = "abba",
    s = "dog cat cat dog"

// const pattern = "abba",
//     s = "dog cat cat fish"

// const pattern = "abba",
//     s = "dog dog dog dog"

function wordPattern(pattern, s) {
    if(pattern.length !== s.split(' ').length) return false
    let ans = true

    let patternArr = [...pattern]
    let sArr = s.split(' ')

    let patternMap = new Map()
    let sMap = new Map()

    patternArr.forEach((char, i) => {
        if(patternMap.has(char)){
            if(patternMap.get(char) !== sArr[i]){
                ans = false
                return
            }
        }else{
            patternMap.set(char, sArr[i])
        }
    })
    
    sArr.forEach((char, i) => {
        if(sMap.has(char)){
            if(sMap.get(char) !== patternArr[i]){
                ans = false
                return
            }
        }else{
            sMap.set(char, patternArr[i])
        }
    })

    return ans
}

console.log(wordPattern(pattern, s))