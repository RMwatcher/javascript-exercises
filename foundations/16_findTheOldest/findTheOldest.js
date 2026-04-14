const findTheOldest = function(array) {
    let yearAdded = new Date();

    array.forEach(element => {
        if (!(element.yearOfDeath)) {
        element.yearOfDeath = yearAdded.getFullYear();
    }  
    });
    
    return sortByAge = array.reduce((a, b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? b : a);
    
}

// Do not edit below this line
module.exports = findTheOldest;
