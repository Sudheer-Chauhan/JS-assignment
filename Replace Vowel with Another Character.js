// Create a function that takes a string and replaces the vowels with another character.


function replaceVowel(word){
    word = word.toLowerCase();
    return word
            .replace(/a/g,"1")
            .replace(/e/g,"2")
            .replace(/i/g,"3")
            .replace(/o/g,"4")
            .replace(/u/g,"5");
    
}

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));