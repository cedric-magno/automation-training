/*
* Day 6 - Async-Await
*   Use async/await for handling promises
*/

// Simulate an asynchronous operation that resolves successfully - simulates API call or database query
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ username: "cedric" });
    }, 1000);
  });
}

// Simulate an asynchronous operation that rejects with an error - simulates API call or database query that fails
function fetchUserFailed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch user"));
    }, 1000);
  });
}

// Using async/await to handle promises
async function getUser() {
  const user = await fetchUser();
  return user;
}

// Using async/await with error handling
async function getUserWithError() {
  try {
    const user = await fetchUserFailed();
    return user;
  } catch (error) {
    console.error("Error in async/await:", error.message);
    return null;
  }
}

// Using Promises with .then() and .catch()
function getUserPromise() {
  return fetchUser().then(user => {
    console.log("Promise resolved:", user);
    return user;
  }).catch(error => {
    console.error("Promise rejected:", error.message);
  });
}

// Using Promises with .then() and .catch() for the error case
function getUserPromiseFailed() {
  return fetchUserFailed().then(user => {
    console.log("Promise resolved:", user);
    return user;
  }).catch(error => {
    console.error("Promise rejected:", error.message);
  });
}

// Using async/await
let user = await getUser();
console.log("Async/await success:", user);

let userError = await getUserWithError();
console.log("Async/await with error handled:", userError);

// Using Promises
getUserPromise();
getUserPromiseFailed();

