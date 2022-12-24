import { words } from "./words"

searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", (words) =>{
    const value = e.target.value
    console.log(value)
})


function anagrams(words) {
    return words.split("").reverse().join("");

}