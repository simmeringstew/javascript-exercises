const findTheOldest = function(people) {

    const currentYear = (new Date()).getFullYear();

    people.forEach(function (person) {
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = currentYear;
        }
    });

    const oldest = people.sort(function(a, b) {
        const yearsOne = a.yearOfDeath - a.yearOfBirth;
        const yearsTwo = b.yearOfDeath - b.yearOfBirth;
        if (yearsOne < yearsTwo) {
            return 1;
        }
        else {
            return -1;
        }
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
