// const path = "NES" as "N" | "S" | "E" | "W"
const path = "NESWW" as "N" | "S" | "E" | "W"

function isPathCrossing(path: "N" | "S" | "E" | "W"): boolean {
    let ans = false
    const pathArr = [...path] as ["N" | "S" | "E" | "W"]
    let location = [0, 0]
    // [north south , east west ]

    const updateLocation = (step: "N" | "S" | "E" | "W") => {
        if(step === "N") location[0]++
        if(step === "S") location[0]--
        if(step === "E") location[1]++
        if(step === "W") location[1]--
    }
    let pathsCrossed = new Set()
    pathsCrossed.add("0,0")
    let locationStr = ""
    pathArr.forEach(step => {
        updateLocation(step)
        locationStr = location.join()
        if(pathsCrossed.has(locationStr)){
            ans = true
            return
        } else {
            pathsCrossed.add(locationStr)
        }
    })

    return ans
}

console.log(isPathCrossing(path))