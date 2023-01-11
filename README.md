# Kenzie Academy Challenge: Anagrams 

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

*However, leave `words.js` unmodified.*

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)).

## Project Plan

This code is a JavaScript implementation of an anagram generator. When the user submits a form with a comma-separated list of words, the code will group the words into anagram sets (i.e. sets of words that are made up of the same letters but in a different order), and then display any sets that have at least five words in them
The anagrams() function takes a single parameter, words, which is an array of words. It then iterates over each word and calls the alphabetize() function on it to get a sorted version of the word. Then, the function checks if there's already an entry in the anagramSets object for the sorted word. If there isn't, it creates a new entry with the word as the first item in an array; if there is, it pushes the word onto the array.
## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

//sort the word and then compare to the words on the words.js file (loop over the dictionary) while looping sort the words compare the words inside the dictionary
// with the words that the user types in
//make a map or an object once
//to do this you would make a new objt and set the  keys of the objct to === to  the sorted word and the values of each of those keys would be all the words
// that those letters can make
// instead of looping over the dictionary you can check the object by using the sorted word the user entered and compared to the object