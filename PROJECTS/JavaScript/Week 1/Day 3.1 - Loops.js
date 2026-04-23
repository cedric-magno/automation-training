// For loop example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop example: Print numbers from 1 to 5
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do-while loop example: Print numbers from 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// For-of loop example: Iterate over an array
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
    console.log(fruit);
}

// For-in loop example: Iterate over object properties
const person = { name: 'Alice', age: 30, city: 'New York' };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}