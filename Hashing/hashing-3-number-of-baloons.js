// const text = "nlaebolko"
// const text = "loonbalxballpoon"
const text = "blloo"
// const text = 'balon'
// const text = "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
// const text = "ghrylkxrmb"

const findBallons = text => {
    let map = new Map()
    for (let i = 0; i < text.length; i++) {
        if (map.has(text.charAt(i))) {
            map.set(text.charAt(i), map.get(text.charAt(i)) + 1)
        } else {
            map.set(text.charAt(i), 1)
        }
    }
    console.log('before',map)

    map.set('l', isNaN(Math.floor(map.get('l')/2))? 0 : Math.floor(map.get('l')/2))
    map.set('o', isNaN(Math.floor(map.get('o')/2))? 0 : Math.floor(map.get('o')/2))

    console.log(map)

    let balloon = new Set ([..."balloon"])
    let balloonNumbers = map.get('b')

    if (balloonNumbers === undefined) {
        return 0
    }

    balloon.forEach(letter => {
        if (map.has(letter)) {
            balloonNumbers = Math.min(balloonNumbers, map.get(letter))
            map.set(letter, map.get(letter) - 1)
        } else {
            balloonNumbers = 0
            return
        }
    }
    )

    return balloonNumbers
}

console.log(findBallons(text))