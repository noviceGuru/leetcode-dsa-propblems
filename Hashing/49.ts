const strs = ["eat","tea","tan","ate","nat","bat"]

const sortString = (string: string) => [...string].sort().join('')

const groupAnagrams = (strs : string[]): string[][]  => {
    let hashMap = new Map()
    for (let str of strs){
        let sortedStr = sortString(str)
        if(hashMap.has(sortedStr)){
            let sortedArrValue = hashMap.get(sortedStr)
            sortedArrValue.push(str)
            hashMap.set(sortedStr, sortedArrValue)
        }else{
            hashMap.set(sortedStr, [str])
        }
    }
    return [...hashMap.values()]
}

console.log(groupAnagrams(strs))