let clickMeButton = document.getElementById("clickMeButton")
let word = document.getElementById("search")
let body = document.querySelector('body')
let anagram = document.createElement('p')

clickMeButton.addEventListener('click', () => {
    anagram.innerHTML = ""
    anagram.innerText = anagrams(word.value)
    body.appendChild(anagram)
})

function anagrams(words){
    return words.split("").reverse().join("")
}

