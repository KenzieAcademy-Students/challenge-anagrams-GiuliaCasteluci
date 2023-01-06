let clickMeButton = document.getElementById("clickMeButton")
let word = document.getElementById("search")
let body = document.querySelector('body')
let anagram = document.createElement('p')
const form = document.querySelector('form');
const result = document.querySelector('#result');

function anagrams(word) {
    let word_randomized = alphabetize(word);
    let arrSort = [];
    words.forEach(str => {
      if (alphabetize(str) === word_randomized) {
        arrSort.push(' ' + str);
      }
    });
    return arrSort;   
}

function alphabetize(word) {
    return word
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .trim();
}
const allAnagrams = document.querySelector('#anagrams');

clickMeButton.addEventListener('click', () => {
    anagram.innerHTML = ""
    anagram.innerText = anagrams(word.value)
    body.appendChild(anagram)

})

form.addEventListener('clickMeButton', anagrams);