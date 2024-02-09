const isUpperCase = (char: string) :boolean => {
    return char.toUpperCase() === char
}

function makeGood(s: string): string {
    let stack= ""
    let strArr = [...s]
    strArr.forEach(letter => {
        if( (letter.toUpperCase() === stack.charAt(stack.length-1).toUpperCase())
            && (isUpperCase(letter) !== isUpperCase(stack.charAt(stack.length-1)))
        ){
            stack = stack.slice(0,-1)
        }else{
            stack = stack + letter
        }
    })
    
    return stack
};