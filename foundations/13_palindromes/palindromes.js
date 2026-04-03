const palindromes = function (strings) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let newStrings = strings
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");

    let reverseString = newStrings.split("").reverse().join("");
    
    return reverseString === newStrings;

};

// Do not edit below this line
module.exports = palindromes;
