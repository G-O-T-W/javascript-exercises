const reverseString = function(str) {
    let reversedString = "";
    for (ch of str) {
        reversedString = ch + reversedString;
    }
    return reversedString;
    }

// Do not edit below this line
module.exports = reverseString;
