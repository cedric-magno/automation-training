/*
* Day 4 - Objects
*   Create and manipulate objects
*   Access and modify object properties
*/

const user = {
    username: "ced",
    password: "pass123",
    role: "user"
};

// modify object values
user.username = "cedric";
user.password = "newSecret";
user.role = "admin";

// combine with array
const users = [
    user,
    {
        username: "alex",
        password: "alex123",
        role: "editor"
    },
    {
        username: "sam",
        password: "sam456",
        role: "viewer"
    }
];

console.log(user);
console.log(users);

// add new user to array
users.push({
    username: "lisa",
    password: "lisa789",
    role: "viewer"
});
console.log(users);

// access specific user
const firstUser = users[0];
console.log(firstUser);

// access specific property of a user
const firstUsername = users[0].username;
console.log(firstUsername);

// edit a specific user
users[1].username = "newAlex";
users[1].password = "newAlex123";
users[1].role = "admin";

// print all properties of a specific user without the bracket notation sample 1
for (let key in users[0]) {
  console.log(`${key}: ${users[1][key]}`);
}

// print all properties of a specific user without the bracket notation sample 2
const result = Object.entries(users[0])
  .map(([key, val]) => `${key}: ${val}`)
  .join(', ');
console.log(result);

// print specific property of all users - each index of the array is a user object, so we can access the username property of each user
// foreach is a method that allows us to iterate through each element in the users array and perform a function on it, in this case, we are logging the username property of each user object to the console
users.forEach(u => {  // u is the current user object in the loop
    console.log(u.username);
});

// print specific property of all users using for loop - this is a simplified version of what is happening in the forEach loop above, 
// where we are iterating through the users array and accessing the username property of each user object
for (let i = 0; i < users.length; i++) {
    const u = users[i];
    console.log(u.username);
}

// add new property to all users
users.forEach(u => {
    u.active = true; // this adds a new property called active to each user object and sets its value to true
});
console.log("User active status:");
users.forEach(u => {  // u is the current user object in the loop
    console.log(u.username + ": " + u.active);
});