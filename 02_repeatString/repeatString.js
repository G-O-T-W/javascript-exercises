const repeatString = function(testString, numberOfRepetition) {
    
    if(numberOfRepetition < 0) return "ERROR";

    let repeatedString = "";

    while(numberOfRepetition != 0) {
        repeatedString = repeatedString + testString;
        numberOfRepetition--;
    }

    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
