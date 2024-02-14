function dailyTemperatures(temps) {
    let ans = new Array(temps.length).fill(0)
    let stack = [[temps[0], 0]]
    // [t, index]
    for (let i = 1; i < temps.length; i++) {
        // keep poping till it's true
        while ((stack[stack.length - 1] || [1000, 0])[0] < temps[i]) {
            ans[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1]
            stack.pop()
        }
        stack.push([temps[i], i])
    }

    console.log(stack)
    return ans
}

const input1 = [73, 74, 75, 71, 69, 72, 76, 73]
const input2 = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70]

console.log(dailyTemperatures(input1))