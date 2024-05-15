const removeFromArray = function(array, ...args) {

    const modifiedArray = [];

    array.forEach((item) => {
        if(!args.includes(item)) {
            modifiedArray.push(item);
        }
    });

    return modifiedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
