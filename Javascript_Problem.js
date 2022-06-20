//Problem-1
// Print 1 to 6 number randomply in playing Ludo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRandomNumber(1, 6));


// Problem-2
// Sorting Name Alphabetically
const persons = ["Biplob", "Shithi", "Sagor", "Amiya", "Gopali"];
const sortedPersons = persons.sort();
//console.log(sortedPersons);



// Problem-3
// sorting number in assending order
const numbers = [20, 5, 15, 1, 3, 21, 7];
const sortedNunbers = numbers.sort(function(a, b){ return a-b});
//console.log(sortedNunbers);

// Problem-4
//sorting number in dessending order
const anotherNumbers = [20, 5, 15, 1, 3, 21, 7];
const sortedDessending = numbers.sort(function(a, b){ return b-a});
//console.log(sortedDessending);
