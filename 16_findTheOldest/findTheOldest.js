const findTheOldest = function (deadPeopleArray) {
    let oldestPerson;
    let oldestPersonAge;
    let currentPersonAge;

    for (let index = 0; index < deadPeopleArray.length; index++) {
        if (index == 0) {
            if (!('yearOfDeath' in deadPeopleArray[index])) {
                oldestPerson = deadPeopleArray[index];
                oldestPersonAge = new Date().getFullYear() - deadPeopleArray[index].yearOfBirth;
            }
            else {
                oldestPerson = deadPeopleArray[index];
                oldestPersonAge = deadPeopleArray[index].yearOfDeath - deadPeopleArray[index].yearOfBirth;
            }
        }
        else {
            if (!('yearOfDeath' in deadPeopleArray[index])) {
                currentPersonAge = new Date().getFullYear() - deadPeopleArray[index].yearOfBirth;
                if (currentPersonAge > oldestPersonAge) {
                    oldestPerson = deadPeopleArray[index];
                    oldestPersonAge = currentPersonAge
                }
            }
            else {
                currentPersonAge = deadPeopleArray[index].yearOfDeath - deadPeopleArray[index].yearOfBirth;
                if (currentPersonAge > oldestPersonAge) {
                    oldestPerson = deadPeopleArray[index];
                    oldestPersonAge = currentPersonAge
                }
            }
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
