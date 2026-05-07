/*
 * Day 7 - Login System (Improved + Explained)
 * -------------------------------------------
 * This program simulates a simple login system using async/await.
 * It:
 * 1. Prompts the user for username and password
 * 2. Looks up the user in a mock database
 * 3. Validates credentials
 * 4. Displays success or failure message
 */

// Import Node.js built-in module for reading user input from the terminal
const readline = require('readline');

/*
 * Mock database (array of user objects)
 * Each user has:
 * - username: login identifier
 * - password: plain text (for demo only, NOT secure in real apps)
 * - name: full name
 * - role: user role (admin/user)
 */
const userDatabase = [
  { username: 'cmagno', password: 'pword123', name: 'Cedric Magno', role: 'admin' },  
  { username: 'alice', password: 'password123', name: 'Alice Johnson', role: 'admin' },
  { username: 'bob', password: 'qwerty', name: 'Bob Smith', role: 'user' },
  { username: 'carla', password: 'letmein', name: 'Carla Brown', role: 'user' }
];

/*
 * FUNCTION: findUser
 * ------------------
 * Simulates fetching a user from a database.
 *
 * @param {string} username - The username to search for
 * @returns {Promise<Object|null>} - Resolves with user object or null
 */
function findUser(username) {
  return new Promise((resolve) => {
    // Simulate database delay (e.g., API call)
    setTimeout(() => {
      // Find user in database array
      const user = userDatabase.find((item) => item.username === username);

      // Return found user OR null if not found
      resolve(user || null);
    }, 300); // 300ms delay
  });
}

/*
 * FUNCTION: authenticate
 * ----------------------
 * Validates username and password.
 *
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>} - Resolves with sanitized user data
 * @throws Error if user not found or password is incorrect
 */
async function authenticate(username, password) {
  // Wait for async user lookup
  const user = await findUser(username);

  // If no user found, throw error
  if (!user) {
    throw new Error('User not found');
  }

  // If password does not match, throw error
  if (user.password !== password) {
    throw new Error('Invalid password');
  }

  // Return only safe/public user data (no password)
  return {
    username: user.username,
    name: user.name,
    role: user.role
  };
}

/*
 * FUNCTION: login
 * ---------------
 * Handles login flow and error handling.
 *
 * @param {string} username
 * @param {string} password
 * @returns {Promise<string>} - Success or failure message
 */
async function login(username, password) {
  try {
    // Attempt authentication
    const user = await authenticate(username, password);

    // If successful, return welcome message
    return `Welcome back, ${user.name}! Role: ${user.role}`;
  } catch (error) {
    // If any error occurs, return failure message
    return `Login failed: ${error.message}`;
  }
}

/*
 * SETUP: Readline Interface
 * -------------------------
 * Used to get input from the terminal (CLI).
 */
const rl = readline.createInterface({
  input: process.stdin,  // keyboard input
  output: process.stdout // console output
});

/*
 * FUNCTION: ask
 * -------------
 * Promisified version of rl.question
 * Allows us to use async/await instead of callbacks.
 *
 * @param {string} question - Question to display
 * @returns {Promise<string>} - User input
 */
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

/*
 * FUNCTION: main
 * --------------
 * Entry point of the application.
 * Handles the full login flow with attempt limiting.
 */
async function main() {
  const maxAttempts = 3;
  let attemptCount = 0;

  while (attemptCount < maxAttempts) {
    // Ask user for username
    const username = await ask('Enter username: ');

    // Ask user for password
    const password = await ask('Enter password: ');

    // Attempt login
    const result = await login(username, password);

    // Display result
    console.log(result);

    // Check if login was successful
    if (result.startsWith('Welcome back')) {
      // Close readline interface and exit
      rl.close();
      return;
    }

    // Increment attempt count on failure
    attemptCount++;

    // Check if max attempts reached
    if (attemptCount >= maxAttempts) {
      console.log('Account locked: Maximum login attempts exceeded.');
      rl.close();
      return;
    }

    // Notify user of remaining attempts
    console.log(`Login failed. Attempts remaining: ${maxAttempts - attemptCount}\n`);
  }
}

// Run the application
main();