function simplifyPath(path: string): string {
    let dirs = path.split("/")

    let dirsStack: string[] = []

    dirs.forEach(dir => {

        if(dir ==="" || dir === "."){
            // do nothing
        }else if(dir === ".."){
            dirsStack.pop()
        }else{
            dirsStack.push(dir)
        }
    })

    let globalPath = dirsStack.join("/")

    if (globalPath.charAt(0) !== "/") {
        globalPath = '/' + globalPath
    }

    return globalPath
}

console.log(simplifyPath('/home/'))