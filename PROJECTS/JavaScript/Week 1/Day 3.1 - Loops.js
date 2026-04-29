// For loop example: Print numbers from 1 to 5
console.log("For loop example:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop example: Print numbers from 1 to 5
console.log("While loop example:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do-while loop example: Print numbers from 1 to 5
console.log("Do-while loop example:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// For-of loop example: Iterate over an array
console.log("For-of loop example:");
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
    console.log(fruit);
}

// For-in loop example: Iterate over object properties
console.log("For-in loop example:");
const person = { name: 'Alice', age: 30, city: 'New York' };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// forEach loop example: Iterate over an array with index
console.log("forEach loop example:");
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// forEach loop example: Iterate over an array of objects
console.log("forEach loop example:");
const employees = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];
employees.forEach((emp) => {
    console.log(`${emp.id}: ${emp.name}`);
});

// forEach loop example: Iterate over a Set
console.log("forEach loop over a set example:");
const colors = new Set(['red', 'green', 'blue']);
colors.forEach((color) => {
    console.log(color);
});

// forEach loop example: Iterate over a Map
console.log("forEach loop with map example:");
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});