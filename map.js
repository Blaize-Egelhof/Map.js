  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1,2,3,4];
let results= [];

for(let x of nums) {
  results.push(x*2); 
}

console.log(results);

// Using map()

const multByTwo = function (num) {
return num * 2 ;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults)




// Simplified w/ map()


const simplified = nums.map(function (num){return num * 2});  //basically just create a function to do something on each iteration , seems that this is a fixed for of loop when using map.js so keep that in mind when creating these functions.

console.log(simplified)

// Simplfied w/ map() + arrow function

const simplified2 = nums.map(num => num * 2 ); 

console.log(simplified2)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name + student.id]);

console.log(studentsWithIds)