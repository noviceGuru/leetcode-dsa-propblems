const s = "abacbc"

const areAllEquall = (s: string): boolean => {
    let chars = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        let theChar = s.charAt(i)
        if (chars.has(theChar)) {
            //@ts-expect-error
            chars.set(theChar, chars.get(theChar) + 1)
        } else {
            chars.set(theChar, 1)
        }
    }

    return [...chars.values()].every(el=> el ===  [...chars.values()][0])
}

console.log(areAllEquall(s))