// Write a function that reverses all the words in a sentence that start with a particular letter.

function specialReverse(sentence,letter){
    let words = sentence.toLowerCase().split(' '); //Extracting all words and storing in array
    for(let i = 0; i<words.length; i++){
        if(words[i][0] == letter){ //Checking the first character of word with the letter passed
            words[i] = words[i].split('').reverse('').join(''); // Reversing the String
        }
    }
    return words.join(' ');
}

console.log(specialReverse("word searches are super fun","s"));
console.log(specialReverse("first man to walk on the moon","m"));
console.log(specialReverse("peter piper picked pickled peppers","p"));
