const nouns = ["Steven", "Jim", "Chicago", "The Eiffel Tower"]
const verbs = ["running", "standing", "talking", "typing"]
const adjectives = ["big", "small", "gray", "transparent"]
const adverbs = ["lively", "openly", "shakily", "urgently"]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateSentence = num => {
    let sentence = []
    let sentenceString = ""
    for (let i = 0; i < num; i++){
        if (sentence.length === 0 || adjectives.includes(sentence[i - 1])) {
            sentence.push(nouns[Math.floor(Math.random() * nouns.length)])
            console.log(sentence)
        } else if (nouns.includes(sentence[i - 1])) {
            sentence.push(verbs[Math.floor(Math.random() * verbs.length)])
            console.log(sentence)
        } else if (verbs.includes(sentence[i - 1])) {
            sentence.push(adverbs[Math.floor(Math.random() * adverbs.length)])
            console.log(sentence)
        } else {
            sentence.push(adjectives[Math.floor(Math.random() * adjectives.length)])
            console.log(sentence)
        }
    }
    sentence.forEach(word => {
        if (adjectives.includes(word)){
            sentenceString += ". " + capitalizeFirstLetter(word) + " "
        } else {
            sentenceString += word + " "
        }
    })
    return sentenceString
    
}
console.log(generateSentence(100))