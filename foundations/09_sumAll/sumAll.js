const sumAll = function(first, second) {
    let newArray = [];
    let result = "";
    if (first < 0 || second < 0 || typeof (frist) == 'string' || typeof (second) == 'string' || Array.isArray(first) || Array.isArray(second) || first % 1 != 0 || second % 1 != 0) return "ERROR";
    
    if (first < second) {
        for (let i = first; i <= second; i++) {
            newArray.push(i);
        }
    } else {
        for (let i = second; i <= first; i++) {
            newArray.push(i);
        }
    }
    
    return result = newArray.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
