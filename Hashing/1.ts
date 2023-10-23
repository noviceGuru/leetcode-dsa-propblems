function checkIfPangram(sentence: string): boolean {
    let arrString = new Set([...sentence])
    return arrString.size === 26
};

console.log(checkIfPangram('abcd'))