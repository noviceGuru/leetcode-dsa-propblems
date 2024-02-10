function dailyTemperatures(temps) {
    let ans = new Array(temps.length).fill(0)
    let count = 0
    let j
    temps.forEach((t, index) => {
        j = index
        count = 0
        while (t >= temps[j]) {
            count++
            j++
        }
        if (t < temps[j]) {

            ans[index] = count
        }
    })

    return ans
}

const input = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(dailyTemperatures(input))