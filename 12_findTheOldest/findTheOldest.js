const findTheOldest = function(people) {
    let sortedPeople = people.slice();
    sortedPeople.forEach(a => {
        console.log(a.yearOfBirth);
    });
    sortedPeople.sort((a, b) => {
    let ageOfA = ((a.yearOfDeath)? a.yearOfDeath : (new Date()).getFullYear()) - a.yearOfBirth; 
    let ageOfB = ((b.yearOfDeath)? b.yearOfDeath : (new Date()).getFullYear()) - b.yearOfBirth;
    if (ageOfA > ageOfB) {
        return -1;
    } else {
        return 1;
    }
  });
  console.log(sortedPeople);
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
