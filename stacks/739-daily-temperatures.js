function dailyTemperatures(temps) {
    let ans = new Array(temps.length).fill(0)
    let stack = [[temps[0], 0]]
    // [t, index]
    for (let i = 1; i < temps.length; i++) {
        if(temps[i]<(stack[stack.length -1] || [1000 , 0])[0]){
            stack.push([temps[i], i])
        }else{
            // keep poping till it's true
            while((stack[stack.length -1] || [1000,0][0]) <= temps[i]){
                ans[stack[stack.length -1][1]] = stack[stack.length -1][1] -i
                stack.pop()

                if((stack[stack.length -1] || [1000,0][0]) > temps[i]){
                    stack.push([temps[i], i])
                }
            }
        }

    }

    console.log(stack)
    return ans
}

const input1 = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(dailyTemperatures(input1))