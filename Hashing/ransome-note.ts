const ransomNote = "aa"
const magazine = "ab"

function canConstruct(ransomNote: string, magazine: string): boolean {
    let canConstruct = true
    let magazineHash = new Map()
    const ransomeArr = [...ransomNote]
    const magazineArr = [...magazine]

    magazineArr.forEach(char => {
        if (magazineHash.has(char)) {
            magazineHash.set(char, magazineHash.get(char) + 1)
        } else {
            magazineHash.set(char, 1)
        }
    })

    console.log(magazineHash)

    ransomeArr.forEach(char => {
        console.log(char, magazineHash.get(char), magazineHash.get(char))
        if (magazineHash.get(char)) {
            magazineHash.set(char, magazineHash.get(char) - 1)
        } else {
            canConstruct = false
            return
        }
    })

    return canConstruct
}

console.log(canConstruct(ransomNote, magazine))
