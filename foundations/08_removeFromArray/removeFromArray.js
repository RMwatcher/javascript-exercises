const removeFromArray = function(array, ...num) {
    const newArray = [];
    array.forEach((item) => {
        if (!num.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;  
};

// Do not edit below this line
module.exports = removeFromArray;
