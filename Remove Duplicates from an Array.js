
// Create a function that takes an array of items, removes all duplicate items and returns a new array in
// the same sequential order as the old array (minus duplicates).

function removeDups(items){
     let newItems = items.filter((element,index) => items.indexOf(element) === index); 
     //if the element already exist than the index it return will be different from current index
     
    return newItems;
}

console.log(removeDups ([1, 0, 1, 0]));
console.log(removeDups (["The", "big", "cat"]));
console.log(removeDups (["John", "Taylor", "John"]));