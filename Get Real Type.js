
// Create a function that takes a value as an argument and returns the type of this value. You should get
// the real type of a value (JavaScript typeof doesn&#39;t return the real object type of values and you need to
// fix that).

function realType(value){

    if(value == null){
        return "null"
    }

    switch(typeof value){
        case(typeof 0):         return "number";

        case(typeof ""):        return "string";

        case(typeof true):      return "boolean";

        case(typeof []):        return "array";

        default:                return "Please use correct type";

    }
}
