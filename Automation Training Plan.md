# 🧭 Automation Testing Learning Plan

## 📊 Progress Dashboard

![Overall](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-overall.json)

### Weekly Progress

![Week 0-1](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week0-1.json)
![Week 2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week2.json)
![Week 3](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week3.json)
![Week 4-5](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week4-5.json)
![Week 6](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week6.json)
![Week 7-8](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week7-8.json)

---

# 📚 TABLE OF CONTENTS

- [Setup](#️-setup)
- [Git Basics](#-git-basics-required)
- [How to Use This Plan](#-how-to-use-this-daily-plan)
- [WEEK 0-1: JavaScript](#-week-0-1-javascript-for-testers-foundation)
- [WEEK 2: Cypress Basics](#-week-2-cypress-basics)
- [WEEK 3: Cypress Advanced](#-week-3-cypress-advanced)
- [WEEK 4-5: TypeScript](#--week-4-5-typescript-transition)
- [WEEK 6: Framework Design](#-week-6-framework-design)
- [WEEK 7-8: Playwright + CI/CD](#-week-7-8-playwright--cicd)
- [Next Steps](#-next-steps)
- [Common Mistakes](#️-common-mistakes)
- [Final Note](#-final-note)
---

# ⚙️ SETUP

Install the following:

- Node.js (LTS version)
- Git
- VS Code

Create accounts:
- GitHub account

Verify installation:
- node -v
- npm -v
- git --version

VS Code Extensions:
- ESLint
- Prettier
- Cypress Snippets (optional)

# 🔧 GIT BASICS (REQUIRED)

Learn:
- git init
- git add .
- git commit -m "message"
- git push

Exercise:
- Create your first repository
- Push a JS file

---

# 🧭 HOW TO USE THIS DAILY PLAN

Each day (1 hour):
- 15 min → Read/watch (linked resource)
- 45 min → Code (guided tasks below)

Always:
- Push code to GitHub  
  `C:\Users\Cedric\ced-projects\automation-training`  
  https://github.com/cedric-magno/automation-training  
- Write 1-2 notes (what you learned / struggled with)
- Put a tick '[X]' on the checkboxes for every part you finish

💡 DEBUGGING RULE:
If something doesn't work:
1. Check error message carefully
2. Add console.log to debug values
3. Search error in Google
4. Retry in small steps (don’t solve everything at once)

---

# 🔵 WEEK 0-1: JavaScript for Testers (FOUNDATION)
![Week 0-1](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week0-1.json)

📚 Use:
- JavaScript.info → Fundamentals section  
- MDN Web Docs → for examples  

---

## 🟢 DAY 1 - Variables + Console - COMPLETED

### LEARN:
- [x] What is a variable?
- [x] Difference between const and let

### DO:
- [x] Create variables: username, password, isLoggedIn
- [x] Print them using console.log

### EXERCISE:
- [x] Change values and observe output

```
const username = "admin";
const password = "1234";
let isLoggedIn = false;

console.log(username);
console.log(password);
console.log(isLoggedIn);
```

### OUTPUT:
- [x] 5+ variables created
- [x] 1 JS file committed

### Notes:
Reference: Grammars and types  
- “let” is block scoped  
- Different scopes:
  - Global scope
  - Module scope
  - Function scope
  - Block scope
- “let” and “const” belong to block scope  
- Variable name is case sensitive  
- Uninitialized variable = undefined  
- Dynamic typing supported  

---

## 🟢 DAY 2 - Functions (CORE) - COMPLETED

### LEARN:
- [x] What is a function?
- [x] Parameters and return values

### DO:
- [x] Create function login(username, password)
- [x] Return true if credentials match

### EXERCISE:
- [x] Create:
  - validateUser
  - logout

```
const validUsername = "admin";
const validPassword = "1234";

function login(username, password) {
  if (username === validUsername && password === validPassword) {
    return true;
  }
  return false;
}

console.log(login("admin", "1234")); // true
console.log(login("wrong", "1234")); // false
```

### OUTPUT:
- [x] 3 working functions

### Notes:
Reference: Functions  

---

## 🟢 DAY 3 - Arrays

### LEARN:
- [x] Arrays and looping concepts
- [x] map() and filter()

### DO:
- [x] Create array of users
- [x] Extract usernames using map()

### EXERCISE:
- [x] Filter active users
- [x] Count users

```
const users = [
  { username: "user1", active: true },
  { username: "user2", active: false },
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
```

### OUTPUT:
- [x] 3 array operations

---

## 📅 DAY 4 - Objects (VERY IMPORTANT)

### LEARN:
- [X] Object structure
- [X] Accessing properties

### DO:
- [X] Create user object:
    { username, password, role }

### EXERCISE:
- [X] Modify object values
- [X] Combine with array (list of users)

```
const user = {
  username: "admin",
  password: "1234",
  role: "admin"
};

user.role = "user";
console.log(user);
```

### OUTPUT:
- [X] Array of objects (test data)

---

## 📅 DAY 5 - Combine Arrays + Objects

### LEARN:
- [ ] Real-world data structures

### DO:
- [ ] Create test data:
  multiple users with roles

### EXERCISE:
- [ ] Filter admin users
- [ ] Get usernames only

```
const users = [
  { username: "admin", role: "admin" },
  { username: "user1", role: "user" }
];

const admins = users.filter(u => u.role === "admin");
console.log(admins);
```

### OUTPUT:
- [ ] Test data simulation ready

---

## 📅 DAY 6 - Async/Await (CRITICAL)

### LEARN:
- [ ] What is async/await?
- [ ] Why async matters in testing

### DO:
- [ ] Create async function returning data

### EXERCISE:
- [ ] Simulate API call (setTimeout or promise)

```
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ username: "cedric" });
    }, 1000);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log(user);
}

getUser();
```

### OUTPUT:
- [ ] 2 async functions

---

## 📅 DAY 7 - Mini Project

### BUILD:
- [ ] Fake login system

### REQUIREMENTS:
- [ ] Validate user credentials
- [ ] Return success/failure

### OUTPUT:
- [ ] Small working JS program

---

## 🧪 TESTING FUNDAMENTALS (BEFORE CYPRESS)

Learn:
- [ ] What is a test case?
- [ ] Assertion vs verification
- [ ] Positive vs negative testing
- [ ] Test data management
- [ ] Flaky tests (what & why)

Exercise:
- [ ] Write 5 manual test cases for login feature

---

# 🔵 WEEK 2: Cypress Basics
![Week 2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week2.json)

📚 Use:
- Cypress Documentation

🌐 TEST SITES:
- https://example.cypress.io
- https://www.saucedemo.com - for login tests

---

## 📅 DAY 1 - Setup Cypress

### LEARN:
- [ ] What is Cypress?
- [ ] Test structure (describe, it)

### DO:
- [ ] Install Cypress
- [ ] Run sample test

```
npm init -y
npm install cypress --save-dev
npx cypress open
```

### OUTPUT:
- [ ] Cypress project running

---

## 📅 DAY 2 - First Test

### LEARN:
- [ ] cy.visit
- [ ] cy.get

### DO:
- [ ] Open a demo site
- [ ] Check page loads

### EXERCISE:
- [ ] Assert URL or title

```
cy.visit("https://example.cypress.io");
cy.url().should("include", "cypress");
```

### OUTPUT:
- [ ] 1 working test

---

## 📅 DAY 3 - Login Test

### DO:
- [ ] Enter username/password
- [ ] Click login

### EXERCISE:
- [ ] Add success assertion
- [ ] Add failure test

```
cy.visit("https://www.saucedemo.com");

cy.get('[data-test="username"]').type("standard_user");
cy.get('[data-test="password"]').type("secret_sauce");

cy.get('[data-test="login-button"]').click();

cy.url().should("include", "inventory");
```

### OUTPUT:
- [ ] 2 login tests

---

## 📅 DAY 4 - Selectors

### LEARN:
- [ ] Good vs bad selectors

✅ Use:

data-test attributes

❌ Avoid:

CSS classes
XPath (if unstable)

### DO:
- [ ] Replace fragile selectors

### OUTPUT:
- [ ] Stable selectors used

---

## 📅 DAY 5 - Form Testing

### DO:
- [ ] Fill form fields
- [ ] Submit form
- [ ] Assert results

### OUTPUT:
- [ ] 1 form test

---

## 📅 DAY 6 - Refactor

### DO:
- [ ] Clean code
- [ ] Remove duplication

### OUTPUT:
- [ ] Improved readability

---

## 📅 DAY 7 - Review

### DO:
- [ ] Fix failing tests
- [ ] Re-run all tests

---

# 🔵 WEEK 3: Cypress Advanced
![Week 3](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week3.json)

## 📅 DAY 1 - Fixtures
- [ ] Create JSON test data
- [ ] Use cy.fixture()

```
cy.fixture("users.json").then(data => {
  cy.log(data);
});
```

### OUTPUT:
- [ ] External test data used

## 📅 DAY 2 - Custom Commands
- [ ] Create cy.login()

```
Cypress.Commands.add("login", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
});
```

### OUTPUT:
- [ ] Reusable command

## 📅 DAY 3 - API Testing
Use:
https://jsonplaceholder.typicode.com
- [ ] cy.request GET

```
cy.request("GET", "/posts").its("status").should("eq", 200);
```

### OUTPUT:
- [ ] API test

## 📅 DAY 4 - POST Request
- [ ] Send POST request
- [ ] Validate response
```
cy.request("POST", "/posts", {
  title: "test"
}).its("status").should("eq", 201);
```

### OUTPUT:
- [ ] API validation test

## 📅 DAY 5 - Hooks
- [ ] beforeEach setup
```
beforeEach(() => {
  cy.visit("/");
});
```

### OUTPUT:
- [ ] Cleaner test flow

## 📅 DAY 6 - Refactor
- [ ] Remove duplication
- [ ] Improve structure

## 📅 DAY 7 - REVIEW + PREP FOR TS

### CHECK:
- [ ] Comfortable with Cypress?
- [ ] Can debug basic issues?
- [ ] Debug issues
- [ ] Prepare for TypeScript

---

# 🔁 WEEK 4-5: TypeScript Transition
![Week 4-5](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week4-5.json)

📚 Use:
- TypeScript Documentation

Why TypeScript?
- Prevent bugs early
- Better IDE support

Start SMALL:
- Only add types to variables first
- Don’t convert everything at once

## 📅 KEY DAILY PATTERN

### Day 1-2:
- [ ] Add types to variables

### Day 3-4:
- [ ] Type functions

### Day 5-6:
- [ ] Convert Cypress tests to TS

### Day 7:
- [ ] Fix errors + review

---

# 🟡 WEEK 6: Framework Design
![Week 6](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week6.json)

Learn:
- [ ] What is Page Object Model (POM)?
- [ ] Why separate selectors?

DO:
- [ ] Create folder structure:
  /pages
  /tests
  /fixtures

- [ ] Create LoginPage.js:
  methods:
    - [ ] visit()
    - [ ] login(username, password)

Exercise:
- Refactor login test to use LoginPage
- [ ] Create Page Objects
- [ ] Move selectors out of tests
- [ ] Separate test data
- [ ] Clean folder structure

```
class LoginPage {
  visit() {
    cy.visit("/");
  }

  login(username, password) {
    cy.get("#user").type(username);
    cy.get("#pass").type(password);
  }
}
```

---

# 🔴 WEEK 7-8: Playwright + CI/CD
![Week 7-8](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week7-8.json)

📚 Use:
- Playwright
- GitHub Actions

Install

```
npm init playwright@latest
```

Learn:
- [ ] What is CI/CD?
CI/CD Sample:
```name: Run Tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npx cypress run
```

- [ ] Why run tests in pipeline?

DO:
- [ ] Create .github/workflows/test.yml
- [ ] Run Cypress tests on push

Exercise:
- [ ] Break a test and see pipeline fail

## 📅 KEY TASKS

- [ ] Install Playwright
- [ ] Write login test
- [ ] Convert Cypress tests
- [ ] Run multi-browser tests
- [ ] Setup CI/CD pipeline

---

# 🚀 NEXT STEPS

1. Build a REAL portfolio project:
   - Full test suite for:
     https://www.saucedemo.com
   Include:
   - UI tests
   - API tests
   - Page Object Model
   - CI/CD pipeline

2. Learn:
   - Test reporting (Allure)
   - Advanced Playwright
   - Parallel execution

3. Practice:
   - Debugging flaky tests
   - Writing stable selectors

4. Prepare for interviews:
   - Explain your framework design
   - Walk through your GitHub repo

5. Apply for roles:
   - QA Automation Engineer
   - SDET (Junior/Mid)

# ⚠️ COMMON MISTAKES

- Using unstable selectors
- Hardcoding waits (cy.wait)
- Copy-pasting without understanding
- Not debugging failures

# 📊 FINAL NOTE

This version removes guesswork. If you follow it:

- You’ll code every day  
- You’ll build real projects  
- You’ll understand what you’re doing (not just copy)

