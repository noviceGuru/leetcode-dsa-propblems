const paths = [
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
]

function destCity(paths: string[][]): string {
    let noWayOut : string = ""
    let firstCities = new Set()
    let secondCities = new Set()
    paths.forEach(([city1, city2]) => {
        firstCities.add(city1)
        secondCities.add(city2)
    })

    secondCities.forEach(secondCity => {
        if(!firstCities.has(secondCity)){
            noWayOut = secondCity as string
        }
    })

    return noWayOut
}

console.log(destCity(paths))
