var userName = "John"; // This is a variable declaration and assignment. We are creating a variable named 'userName' and assigning it the value "John".
const pi = 3.14; // This is a constant declaration and assignment. We are creating a constant named 'pi' and assigning it the value 3.14. Constants cannot be reassigned.
let password = "password123"; // This is a variable declaration and assignment. We are creating a variable named 'password' and assigning it the value "password123".

if (password === "password123") { // This is a conditional statement that checks if the value of 'password' is equal to "password123".
    let password = "newPassword456";
    console.log("Value of password inside the if block: " + password); // This will log "Value of password inside the if block: newPassword456" to the console, as it is referring to the 'password' variable declared within the if block.
}
console.log("Username is: " + userName);     
console.log("Value of password outside the if block: " + password); // This will log "password123" to the console, as it is referring to the 'password' variable declared outside the if block.     
console.log(pi);