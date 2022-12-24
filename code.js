// Your Code Here.
// Your Code Here.
import { words } from "./words.js";



function anagrams() {
    var input = words;
    var abc = input.split(", ");

    for (var i = 0; i < abc.length; i++) {

        var word = abc[i];
        var alphabetical = word.split("").sort().join("");

        for (var j = 0; j < abc.length; j++) {

            if (i === j) {
                continue;
            }

            var other = abc[j];
            if (alphabetical === other.split("").sort().join("")) {
                console.log(word + " - " + other + " (" + i + ", " + j + ")");
            }
        }
    };};