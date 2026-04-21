var userName = "John"; // This is a variable declaration and assignment. We are creating a variable named 'userName' and assigning it the value "John".
let password = "password123"; // This is a variable declaration and assignment. We are creating a variable named 'password' and assigning it the value "password123".
var isLoggedIn = false; // This is a variable declaration and assignment. We are creating a variable named 'isLoggedIn' and assigning it the value false.
const pi = 3.14; // This is a constant declaration and assignment. We are creating a constant named 'pi' and assigning it the value 3.14. Constants cannot be reassigned.
let testVar = 67;
// const does not allow reassign but does not prevent mutations:
const MY_OBJECT = { key: "value" }; 
MY_OBJECT.key = "otherValue"; //Properties of object assigned to const are not protected
const MY_ARRAY = ["HTML", "CSS"]; 
MY_ARRAY.push("JAVASCRIPT"); // const Arrays are not protected

console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
console.log("Value of userName before the if block: " + userName);  
if (password === "password123") { // This is a conditional statement that checks if the value of 'password' is equal to "password123".
    let password = "newPassword456";
    userName = "Jane"; // This is an assignment. We are changing the value of the 'userName' variable to "Jane".
    isLoggedIn = true; // This is an assignment. We are changing the value of the 'isLoggedIn' variable to true.
    console.log("Value of userName inside the if block: " + userName); 
    console.log("Value of password inside the if block: " + password); // This will log "Value of password inside the if block: newPassword456" to the console, as it is referring to the 'password' variable declared within the if block.
    console.log("Value of testVar is: " + testVar);
}
console.log("Is the user logged in? " + isLoggedIn); // This will log "Is the user logged in? true" to the console, as the value of 'isLoggedIn' was changed to true within the if block.
console.log("Value of userName outside the if block: " + userName);     
console.log("Value of password outside the if block: " + password); // This will log "password123" to the console, as it is referring to the 'password' variable declared outside the if block.     
console.log("Value of pi is: " + pi);