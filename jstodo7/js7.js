//Write a function capitals that takes a single string (word) 
//as argument. The functions must return an ordered list 
//containing the indexes of all capital letters in the string.

var capitals = function(word) {
    array = [];
    var splitWord = word.split("");
    for( var i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === splitWord[i].toUpperCase()) {
            array.push(splitWord.indexOf(splitWord[i]));
                
            }
    }
    return array;
};

capitals('CodEWaRs');