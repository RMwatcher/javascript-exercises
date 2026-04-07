const fibonacci = function(number) {
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
    let sequence;
    if (typeof number !== "number") {
        sequence = parseInt(number);
    } else {
        sequence = number;
    }

    if (sequence < 0) {
        return "OOPS";
    } else if (sequence == 0 ) {
        return 0;
    }

    let first = 1;
    let second = 0;

    for (let i = 2; i <= sequence; i++) {
        let current = first + second;
        second = first;
        first = current;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
