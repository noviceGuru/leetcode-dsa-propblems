const s = "eceba"
const k = 2

const findLongestUniuqeLength = (s: string, k: number): number => {
    const stringLength = s.length
    let longestLength = 0

    let left = 0
    let right = 0

    let currentSliceHashMap = new Map<string, number>()

    while (left < stringLength && right <= stringLength) {
        if (currentSliceHashMap.size <= k) {
            right++
            if (currentSliceHashMap.has(s.charAt(right))) {
                currentSliceHashMap.set(
                    s.charAt(right),
                    //@ts-expect-error
                    currentSliceHashMap.get(s.charAt(right)) + 1
                )
            } else {
                currentSliceHashMap.set(s.charAt(right), 1)
            }
        } else {
            currentSliceHashMap.set(
                s.charAt(right),
                //@ts-expect-error
                currentSliceHashMap.get(s.charAt(left)) - 1
            )
            left++
        }

        if (currentSliceHashMap.size <= k && right - left + 1 > longestLength) {
            longestLength = right - left + 1
        }
    }

    return longestLength
}

console.log(findLongestUniuqeLength(s, k))
