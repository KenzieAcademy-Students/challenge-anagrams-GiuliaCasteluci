let word = document.getElementById("search");
let body = document.querySelector("body");
let anagram = document.createElement("p");
const input = document.querySelector("form");
const result = document.querySelector("#result");

let anagramSets = {};

words.forEach((word) => {
  let sortedWord = alphabetize(word);
  if (!anagramSets[sortedWord]) {
    anagramSets[sortedWord] = [word];
  } else {
    anagramSets[sortedWord].push(word);
  }
});

function alphabetize(word) {
  return word.toLowerCase().split("").sort().join("").trim();
}

function anagrams(words) {
  for (let set of Object.values(anagramSets)) {
    if (set.length >= 5) {
      const allAnagrams = document.querySelector("#anagrams");
      allAnagrams.innerText += set.join(",");
    }
  }
}

anagrams(words)

input.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(word,e)
  let innerText = document.getElementById("search").value
  let display = anagramSets[alphabetize(innerText)]
  result.innerText = display
});

