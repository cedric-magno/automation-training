/*
* Day 3 - Arrays Exercises
*   Create array of users
*   Extract usernames using map()
*   Filter active users
*   Count users
*   Array Operations
*/

// Create an array of user objects, each with an id, name, and active status
const userArray = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
    { id: 4, name: "David", active: false },
    { id: 5, name: "Eve", active: true },
];

console.log("Users:");
// 'user' is the parameter representing each element in the userArray. The arrow function takes each user object and logs its name property to the console.
userArray.map(user => console.log(user.name)); // Extract and log usernames using map()

const activeUsers = userArray.filter(user => user.active);
console.log("Active Users:");
activeUsers.forEach(user => console.log(user.name)); // Filter and log active users
console.log("Number of active users: " + activeUsers.length); // Count and log number of active users
console.log("Total number of users: " + userArray.length); // Count and log total number of users

// Sort users by name alphabetically
const sortedUsers = userArray.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted Users by Name:");
sortedUsers.forEach(user => console.log(user.name));

// Find the first inactive user
const firstInactive = userArray.find(user => !user.active);
console.log("First Inactive User:", firstInactive ? firstInactive.name : "None");

// Check if all users are active
const allActive = userArray.every(user => user.active);
console.log("Are all users active?", allActive);

// Check if any user is named "Alice"
const hasAlice = userArray.some(user => user.name === "Alice");
console.log("Is there a user named Alice?", hasAlice);

// Reduce to count total active users (alternative to filter + length)
const activeCount = userArray.reduce((count, user) => count + (user.active ? 1 : 0), 0);
console.log("Active users count (using reduce):", activeCount);

// Get array of user IDs using map
const userIds = userArray.map(user => user.id);
console.log("User IDs:", userIds);

// Check if ID 3 is in the array
const hasId3 = userIds.includes(3);
console.log("Does the array include ID 3?", hasId3);