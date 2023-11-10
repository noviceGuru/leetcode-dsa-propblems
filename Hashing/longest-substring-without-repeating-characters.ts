// const string: string = "abcabcbb"
// const string: string = "bbbbb"
const string: string = "pwwkew"

function lengthOfLongestSubstring(s: string): number {
    const length = s.length

    let ans = 0
    let left = 0
    let right = 0

    let set = new Set()

    while (left < length && right < length) {
        if (set.has(s.charAt(right))) {
            set.delete(s.charAt(left))
            left++
        }else{
            set.add(s.charAt(right))
            right++
        }

        if (set.size === right - left) {
            ans = Math.max(ans, right - left)
        }
    }

    return ans
}

console.log(lengthOfLongestSubstring(string), "final answer")
