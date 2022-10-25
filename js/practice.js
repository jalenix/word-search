const input = document.querySelector('#input')
const submitBtn = document.querySelector('#submit')
const text = document.querySelector('#text')


function findShort(str) {
    let words = str.split(' ')
    console.log(words)
    let wordlenght = words[0].length
    let lastIdx = 0
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if(element.length < wordlenght){
            lastIdx = i
            wordlenght = element.length
        }
        console.log(element)

    }
    console.log(wordlenght)
    text.innerHTML = words[lastIdx]
}

submitBtn.addEventListener('click', function() {findShort(input.value)})
