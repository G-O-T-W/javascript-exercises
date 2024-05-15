const reverseString = function(inputString) {

    let reversedString = "";

    let charAtIndex = '';

    for(let i = 0; i < inputString.length; i++) {
        
        charAtIndex = inputString.charAt(i);

        reversedString = charAtIndex + reversedString;

    }
    
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
