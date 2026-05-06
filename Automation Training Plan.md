# 🧭 Automation Testing Learning Plan
### Playwright-First · TypeScript · CI/CD · 2026 Edition

> **Framework Decision:** This plan focuses on **Playwright** as the primary automation framework.
> As of 2026, Playwright leads with **45.1% adoption** among QA professionals, **78,600+ GitHub stars**, and the highest job market demand for modern automation roles. It is backed by Microsoft, supports TypeScript/JavaScript/Python/Java/C#, runs cross-browser (Chromium, Firefox, WebKit), and is the top choice for modern SDET roles.
>
> Cypress is covered as a **secondary skill** (still widely used in front-end teams). Selenium is covered as a **supplemental skill** for enterprise/legacy environments.

---

## 📊 Progress Dashboard

![Overall](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-overall.json)

### Weekly Progress

![Week 0](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week0.json)
![Week 2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week2.json)
![Week 3](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week3.json)
![Week 4](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week4.json)
![Week 5](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week5.json)
![Week 6](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week6.json)
![Week 7](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week7.json)
![Week 8](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week8.json)
![Week 9](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week9.json)
![Week 10](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week10.json)
![Week 11](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week11.json)
![Week 12](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week12.json)
![Week 13](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week13.json)
![Week 14](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week14.json)
![Week 15](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week15.json)
![Week 16](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week16.json)

Track your progress by checking off tasks with `[x]` as you complete them.

| Phase | Weeks | Focus |
|---|---|---|
| 🔵 Foundation | 0–1 | JavaScript for Testers |
| 🔵 Core Framework | 2–4 | Playwright Fundamentals |
| 🔵 Intermediate | 5–6 | TypeScript + Framework Design |
| 🟡 Advanced | 7–8 | Advanced Playwright + API Testing |
| 🟡 Integration | 9 | CI/CD + GitHub Actions |
| 🔴 Portfolio | 10 | Real Project + Portfolio |
| ➕ Supplemental | 11–12 | Cypress (Secondary) |
| ➕ Supplemental | 13–14 | Selenium (Enterprise/Legacy) |
| ➕ Supplemental | 15 | Mobile Testing with Appium |
| ➕ Supplemental | 16 | AI-Assisted Testing |

---

# 📚 TABLE OF CONTENTS

- [Why Playwright?](#-why-playwright)
- [Setup](#️-setup)
- [Git Basics](#-git-basics-required)
- [How to Use This Plan](#-how-to-use-this-daily-plan)
- [WEEK 0–1: JavaScript Foundation](#-week-01-javascript-for-testers-foundation)
- [WEEK 2–4: Playwright Fundamentals](#-week-24-playwright-fundamentals)
- [WEEK 5–6: TypeScript + Framework Design](#-week-56-typescript--framework-design)
- [WEEK 7–8: Advanced Playwright + API Testing](#-week-78-advanced-playwright--api-testing)
- [WEEK 9: CI/CD + GitHub Actions](#-week-9-cicd--github-actions)
- [WEEK 10: Portfolio Project](#-week-10-portfolio-project)
- [SUPPLEMENTAL Week 11–12: Cypress](#-supplemental-week-1112-cypress-secondary-skill)
- [SUPPLEMENTAL Week 13–14: Selenium](#-supplemental-week-1314-selenium-enterpriselegacy)
- [SUPPLEMENTAL Week 15: Mobile Testing (Appium)](#-supplemental-week-15-mobile-testing-with-appium)
- [SUPPLEMENTAL Week 16: AI-Assisted Testing](#-supplemental-week-16-ai-assisted-testing)
- [Next Steps](#-next-steps--career-roadmap)
- [Common Mistakes](#️-common-mistakes)
- [Interview Prep](#-interview-prep-cheat-sheet)

---

# 🏆 Why Playwright?

| Factor | Playwright | Cypress | Selenium |
|---|---|---|---|
| **2026 Adoption** | 45.1% ✅ | 14.4% | 22.1% (declining) |
| **GitHub Stars** | 78,600+ ✅ | ~50,000 | ~32,000 |
| **Job Market** | Fastest growing ✅ | Steady | Legacy enterprise |
| **Speed** | Fastest ✅ | Medium | Slowest |
| **Cross-browser** | Chrome, Firefox, WebKit ✅ | Chrome, Firefox (limited Safari) | All (via drivers) |
| **Languages** | JS, TS, Python, Java, C# ✅ | JS/TS only | Many |
| **Mobile** | Yes (native) ✅ | No | Via Appium |
| **Parallel Execution** | Free, built-in ✅ | Paid (Cloud) | Via Selenium Grid |
| **Flaky Tests** | Lowest (auto-wait) ✅ | Medium | Highest |
| **Backed by** | Microsoft ✅ | Cypress.io | Open Source |

**Verdict:** Playwright is the clear choice for new learners in 2026 targeting modern SDET/QA Automation roles.

---

# ⚙️ SETUP

Install the following:
- Node.js (LTS version) → https://nodejs.org
- Git → https://git-scm.com
- VS Code → https://code.visualstudio.com

Create accounts:
- GitHub → https://github.com

Verify installation:
```bash
node -v
npm -v
git --version
```

**VS Code Extensions (install all):**
- ESLint
- Prettier
- Playwright Test for VSCode (by Microsoft) ← essential
- GitLens
- Path Intellisense

---

# 🔧 GIT BASICS (REQUIRED)

Learn:
- `git init`
- `git add .`
- `git commit -m "message"`
- `git push`
- `git pull`
- `git branch`
- `git checkout -b feature/branch-name`

**Exercise — Your First Repo:**
- [ ] Create a GitHub account
- [ ] Create a repository called `automation-training`
- [ ] Clone it locally
- [ ] Create a `hello.js` file
- [ ] Push it to GitHub

**Bonus Exercise:**
- [ ] Create a `.gitignore` file and add `node_modules/` to it
- [ ] Create a `README.md` and describe what you're learning
- [ ] Push both files and verify on GitHub

---

# 🧭 HOW TO USE THIS DAILY PLAN

**Each day (1 hour):**
- 15 min → Read/watch the linked resource
- 45 min → Code the tasks and exercises

**Always:**
- Push code to GitHub after each session
- Write 1–3 notes (what you learned / struggled with)
- Tick `[x]` on completed checkboxes

**💡 DEBUGGING RULE — follow this order:**
1. Read the full error message carefully
2. Add `console.log()` to debug values
3. Search the exact error in Google or the official docs
4. Break the problem into smaller pieces — don't solve everything at once
5. If stuck for 20+ minutes, move on and come back later

---

# 🔵 WEEK 0–1: JavaScript for Testers (FOUNDATION)
![Week 0](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week0.json)

📚 Resources: [JavaScript.info](https://javascript.info) · [MDN Web Docs](https://developer.mozilla.org)

---

## 🟢 DAY 1 – Variables + Console

### LEARN:
- [X] What is a variable?
  👉 https://javascript.info/variables
  👉 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
- [X] `const` vs `let` vs `var`
  👉 https://javascript.info/variables#modern-variable-declaration

### DO:
- [X] Create variables: `username`, `password`, `isLoggedIn`, `attempts`
- [X] Print all values using `console.log()`
- [X] Try changing a `const` and observe the error

### EXERCISES:
```js
// Exercise 1: Basic variables
const username = "admin";
const password = "1234";
let isLoggedIn = false;
let attempts = 0;

console.log(username, password, isLoggedIn, attempts);

// Exercise 2: Type checking
console.log(typeof username);   // "string"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof attempts);   // "number"

// Exercise 3: String template literals
const greeting = `Hello, ${username}! You have ${attempts} login attempts.`;
console.log(greeting);
```

### CHALLENGE:
- [X] Create a variable for `maxAttempts = 3`
- [X] Print a message: `"Remaining attempts: X"` using template literals
- [X] Try to reassign a `const` — read and explain the error

### OUTPUT:
- [X] 6+ variables created
- [X] 1 JS file committed to GitHub

### Notes:
```
// Write what you learned here
```

---

## 🟢 DAY 2 – Functions

### LEARN:
- [X] What is a function?
  👉 https://javascript.info/function-basics
- [X] Parameters and return values
  👉 https://javascript.info/function-basics#parameters
- [X] Arrow functions
  👉 https://javascript.info/arrow-functions-basics

### DO:
- [X] Create `login(username, password)` returning `true` or `false`
- [X] Create an arrow function version of the same

### EXERCISES:
```js
// Exercise 1: Regular function
const validUsername = "admin";
const validPassword = "1234";

function login(username, password) {
  if (username === validUsername && password === validPassword) {
    return true;
  }
  return false;
}

console.log(login("admin", "1234"));  // true
console.log(login("wrong", "1234")); // false

// Exercise 2: Arrow function
const loginArrow = (username, password) =>
  username === validUsername && password === validPassword;

console.log(loginArrow("admin", "1234")); // true

// Exercise 3: Function with default parameters
function greetUser(name = "Guest", role = "viewer") {
  return `Welcome, ${name}! Your role is: ${role}`;
}

console.log(greetUser("Cedric", "admin"));
console.log(greetUser()); // uses defaults
```

### CHALLENGE:
- [X] Create a `logout()` function that returns `"Logged out successfully"`
- [X] Create a `validatePassword(password)` function that checks if password length is at least 8 characters
- [X] Call all three functions and log the results

### OUTPUT:
- [X] 4+ working functions (regular + arrow)
- [X] File committed

### Notes:
```
// Write what you learned here
```

---

## 📅 DAY 3 – Arrays

### LEARN:
- [X] Arrays and looping
  👉 https://javascript.info/array
- [X] `map()`, `filter()`, `find()`, `forEach()`
  👉 https://javascript.info/array-methods

### DO:
- [X] Create an array of user objects
- [X] Use `map()`, `filter()`, `find()`

### EXERCISES:
```js
const users = [
  { username: "admin",   role: "admin",  active: true  },
  { username: "cedric",  role: "user",   active: true  },
  { username: "testbot", role: "user",   active: false },
  { username: "manager", role: "manager",active: true  },
];

// Exercise 1: filter active users
const activeUsers = users.filter(user => user.active);
console.log("Active:", activeUsers);

// Exercise 2: get only usernames using map
const usernames = users.map(user => user.username);
console.log("Usernames:", usernames);

// Exercise 3: find a specific user
const found = users.find(user => user.username === "cedric");
console.log("Found:", found);

// Exercise 4: count active users
console.log("Active count:", activeUsers.length);

// Exercise 5: forEach
users.forEach(user => {
  console.log(`${user.username} (${user.role}) - Active: ${user.active}`);
});
```

### CHALLENGE:
- [X] Filter only `"admin"` role users
- [X] Create a new array with only `{ username, active }` properties (use `map`)
- [X] Check if ANY inactive user exists using `.some()`

### OUTPUT:
- [X] 5+ array operations working

---

## 📅 DAY 4 – Objects (VERY IMPORTANT)

### LEARN:
- [X] Object structure and properties
  👉 https://javascript.info/object
- [X] Destructuring
  👉 https://javascript.info/destructuring-assignment

### DO:
- [X] Create a `user` object with multiple properties
- [X] Read, update, and delete properties

### EXERCISES:
```js
// Exercise 1: Create and modify object
const user = {
  username: "admin",
  password: "1234",
  role: "admin",
  active: true,
  loginCount: 0
};

user.role = "superadmin";      // update
user.loginCount += 1;          // increment
delete user.password;          // delete
console.log(user);

// Exercise 2: Destructuring
const { username, role, active } = user;
console.log(`${username} is a ${role}. Active: ${active}`);

// Exercise 3: Nested object
const testConfig = {
  baseUrl: "https://www.saucedemo.com",
  credentials: {
    valid:   { username: "standard_user", password: "secret_sauce" },
    invalid: { username: "wrong_user",    password: "wrong_pass"   },
    locked:  { username: "locked_out_user", password: "secret_sauce" }
  },
  timeouts: { short: 3000, medium: 5000, long: 10000 }
};

console.log(testConfig.credentials.valid.username);
console.log(testConfig.timeouts.medium);
```

### CHALLENGE:
- [X] Add a method `getDisplayName()` to the user object that returns `"username (role)"`
- [X] Create a `testData` object containing both valid AND invalid login credentials
- [X] Destructure the nested credentials and print them

### OUTPUT:
- [X] Object with nested data created and manipulated

---

## 📅 DAY 5 – Combine Arrays + Objects

### LEARN:
- [X] Arrays of objects
  👉 https://javascript.info/array-of-objects
- [X] Spread operator
  👉 https://javascript.info/rest-parameters-spread

### EXERCISES:
```js
// Exercise 1: Array of test user objects
const testUsers = [
  { username: "standard_user",   password: "secret_sauce", expectedResult: "success" },
  { username: "locked_out_user", password: "secret_sauce", expectedResult: "locked"  },
  { username: "wrong_user",      password: "wrong_pass",   expectedResult: "failure" },
];

// Filter for users expected to fail
const failingUsers = testUsers.filter(u => u.expectedResult !== "success");
console.log("Users that should fail:", failingUsers);

// Exercise 2: Spread operator
const baseUser = { role: "user", active: true };
const adminUser = { ...baseUser, username: "admin", role: "admin" };
console.log(adminUser);

// Exercise 3: Simulate test data lookup
function getTestUser(expectedResult) {
  return testUsers.find(u => u.expectedResult === expectedResult);
}

const successUser = getTestUser("success");
console.log("Use for success test:", successUser.username);
```

### CHALLENGE:
- [X] Add a `description` property to each test user explaining what is being tested
- [X] Create a function `getUsersByResult(result)` that returns all users matching that expected result
- [X] Print a formatted summary of all test users

---

## 📅 DAY 6 – Async/Await (CRITICAL FOR PLAYWRIGHT)

### LEARN:
- [X] Promises and async/await
  👉 https://javascript.info/async-await
- [X] Why async matters in testing
  👉 https://javascript.info/promise-basics

### EXERCISES:
```js
// Exercise 1: Basic Promise
function fetchUserFromDB(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, username: `user_${id}`, active: true });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

// Exercise 2: Async/await with try-catch (ALWAYS use this pattern)
async function loadUser(id) {
  try {
    const user = await fetchUserFromDB(id);
    console.log("Loaded user:", user);
    return user;
  } catch (error) {
    console.error("Error loading user:", error.message);
    return null;
  }
}

loadUser(1);   // success
loadUser(-1);  // triggers error

// Exercise 3: Multiple async operations
async function loadMultipleUsers() {
  const ids = [1, 2, 3];
  const users = await Promise.all(ids.map(id => fetchUserFromDB(id)));
  console.log("All users:", users);
}

loadMultipleUsers();
```

### CHALLENGE:
- [X] Create an async function `simulateLogin(username, password)` that resolves after 1 second with `{ success: true }` if credentials match, or rejects with an error if not
- [X] Call it with both valid and invalid credentials using `try/catch`

---

## 📅 DAY 7 – Mini Project: Login System Simulator

### BUILD: A command-line login simulator

### REQUIREMENTS:
- [X] Array of valid users stored as objects
- [X] `login(username, password)` function (async)
- [ ] Handles: valid login, wrong password, locked account, max attempts (3)
- [X] All functions use `async/await`
- [X] Committed to GitHub

```js
// Starter structure — complete the rest yourself
const users = [
  { username: "admin",       password: "admin123",   role: "admin",  locked: false },
  { username: "standard",    password: "pass123",    role: "user",   locked: false },
  { username: "lockeduser",  password: "pass123",    role: "user",   locked: true  },
];

let attempts = {};

async function login(username, password) {
  // TODO: Check if user exists
  // TODO: Check if user is locked
  // TODO: Check if attempts exceeded
  // TODO: Validate password
  // TODO: Return appropriate result
}

async function runTests() {
  console.log(await login("admin", "admin123"));     // success
  console.log(await login("admin", "wrongpass"));    // wrong password
  console.log(await login("lockeduser", "pass123")); // locked
  console.log(await login("ghost", "pass123"));      // not found
}

runTests();
```

---

## 🧪 TESTING FUNDAMENTALS (BEFORE PLAYWRIGHT)

Learn the theory before writing tests:
- [X] What is a test case?
  👉 https://www.guru99.com/test-case.html
- [X] Validation vs Verification
  👉 https://www.guru99.com/verification-v-s-validation-in-a-software-testing.html
- [X] Positive vs Negative Testing
  👉 https://www.guru99.com/positive-and-negative-testing.html
- [X] Test Data
  👉 https://www.guru99.com/software-testing-test-data.html
- [X] What are Flaky Tests?
  👉 https://www.jetbrains.com/teamcity/ci-cd-guide/concepts/flaky-tests/
- [X] AAA Pattern (Arrange-Act-Assert)
  👉 https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/

**Exercise — Write Manual Test Cases:**
- [X] Write 5 manual test cases for the SauceDemo login page
  - Use this template: `Test ID | Description | Steps | Expected Result | Actual Result | Pass/Fail`
  - Cover: valid login, wrong password, empty fields, locked user, SQL injection attempt

---

# 🔵 WEEK 2–4: Playwright Fundamentals

📚 Resources: [Playwright Docs](https://playwright.dev/docs/intro) · [playwright.dev](https://playwright.dev)

🌐 TEST SITES:
- https://www.saucedemo.com (login/e-commerce)
- https://demo.playwright.dev/todomvc (todo app)
- https://jsonplaceholder.typicode.com (API testing)
- https://reqres.in (REST API practice)

---
![Week 2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week2.json)

## WEEK 2, DAY 1 – Install + First Test

### LEARN:
- [ ] What is Playwright and how it works
  👉 https://playwright.dev/docs/intro
- [ ] Test structure in Playwright (`test`, `expect`)
  👉 https://playwright.dev/docs/writing-tests

### DO — Install Playwright:
```bash
mkdir playwright-training && cd playwright-training
npm init playwright@latest
# Choose: TypeScript → Yes → tests → Yes (GitHub Actions) → Yes (browsers)
```

### DO — Run your first test:
```bash
npx playwright test           # run all tests (headless)
npx playwright test --headed  # run with browser visible
npx playwright show-report    # view HTML report
```

### EXERCISE 1 – Your First Test:
```typescript
// tests/first-test.spec.ts
import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('SauceDemo loads correctly', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('.login_logo')).toBeVisible();
});
```

### EXERCISE 2 – Explore the Config:
- [ ] Open `playwright.config.ts` — read every option
- [ ] Change `headless` to `false` and re-run tests
- [ ] Add a screenshot on failure: `screenshot: 'only-on-failure'`

### OUTPUT:
- [ ] Playwright installed
- [ ] 2 passing tests
- [ ] HTML report viewed

---

## WEEK 2, DAY 2 – Locators (THE MOST IMPORTANT SKILL)

### LEARN:
- [ ] Playwright Locators (preferred approach)
  👉 https://playwright.dev/docs/locators
- [ ] Best practices for selectors
  👉 https://playwright.dev/docs/best-practices

### PRIORITY ORDER (use in this order):
```
1. page.getByRole()        ← most accessible, most stable
2. page.getByLabel()       ← for form fields
3. page.getByText()        ← for visible text
4. page.getByTestId()      ← when data-testid is available
5. page.locator('css')     ← fallback: specific CSS
6. page.locator('xpath')   ← last resort only
```

### EXERCISES:
```typescript
// tests/locators.spec.ts
import { test, expect } from '@playwright/test';

test('practice locator strategies', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // By test ID (most stable)
  const usernameField = page.getByTestId('username');
  const passwordField = page.getByTestId('password');
  const loginButton   = page.getByTestId('login-button');

  // Verify elements are visible
  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  // By role
  const button = page.getByRole('button', { name: 'Login' });
  await expect(button).toBeVisible();
});

test('explore locator methods', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // By placeholder
  const input = page.getByPlaceholder('What needs to be done?');
  await expect(input).toBeVisible();

  // By label
  await page.goto('https://www.saucedemo.com');
  // Try locating the username input by different strategies
  // and observe which ones work
});
```

### CHALLENGE:
- [ ] Open Chrome DevTools on saucedemo.com — inspect the username input
- [ ] Find: the `data-test` attribute, the `id`, the CSS class
- [ ] Write 3 different locators for the same element and verify all work

---

## WEEK 2, DAY 3 – Login Test (Core Actions)

### LEARN:
- [ ] `fill()`, `click()`, `press()`
  👉 https://playwright.dev/docs/input
- [ ] Assertions
  👉 https://playwright.dev/docs/test-assertions

### EXERCISES:
```typescript
// tests/login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login', () => {

  test('valid login redirects to inventory', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('wrong password shows error message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('wrongpassword');
    await page.getByTestId('login-button').click();

    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText('Epic sadface');
  });

  test('locked out user sees error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('username').fill('locked_out_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });

  test('empty fields show validation error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});
```

### CHALLENGE:
- [ ] Add a 5th test: `performance_glitch_user` should eventually succeed (it's just slow)
- [ ] Add a test for the `problem_user` and check the product images are broken

### OUTPUT:
- [ ] 4+ login tests passing

---

## WEEK 2, DAY 4 – Screenshots + Tracing (Debugging Tools)

### LEARN:
- [ ] Screenshots
  👉 https://playwright.dev/docs/screenshots
- [ ] Trace Viewer (Playwright's best debugging tool)
  👉 https://playwright.dev/docs/trace-viewer

### DO:
```typescript
// tests/tracing-demo.spec.ts
import { test, expect } from '@playwright/test';

test('take screenshot on demand', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.screenshot({ path: 'screenshots/login-page.png', fullPage: true });
  console.log('Screenshot saved!');
});
```

### Enable Tracing (in playwright.config.ts):
```typescript
use: {
  trace: 'on-first-retry',  // records trace only when a test fails and retries
  screenshot: 'only-on-failure',
  video: 'on-first-retry',
}
```

### EXERCISE:
- [ ] Intentionally break a test (wrong URL)
- [ ] Run it — observe the failure
- [ ] Run `npx playwright show-report` and view the trace
- [ ] Step through the trace and find where it failed

### OUTPUT:
- [ ] Screenshots working
- [ ] Trace viewer explored

---

## WEEK 2, DAY 5 – Test Hooks + Grouping

### LEARN:
- [ ] `beforeEach`, `afterEach`, `beforeAll`, `afterAll`
  👉 https://playwright.dev/docs/test-fixtures#auto-fixtures

### EXERCISES:
```typescript
// tests/hooks.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Login tests with hooks', () => {

  test.beforeEach(async ({ page }) => {
    // Runs before every test in this describe block
    await page.goto('https://www.saucedemo.com');
  });

  test.afterEach(async ({ page }, testInfo) => {
    // Take screenshot if test failed
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `screenshots/failed-${testInfo.title.replace(/\s/g, '-')}.png`
      });
    }
  });

  test('valid login works', async ({ page }) => {
    // No need to navigate — beforeEach handles it
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL(/inventory/);
  });

  test('invalid login shows error', async ({ page }) => {
    await page.getByTestId('username').fill('invalid_user');
    await page.getByTestId('password').fill('invalid_pass');
    await page.getByTestId('login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});
```

### CHALLENGE:
- [ ] Add `beforeAll` to log "Starting login test suite"
- [ ] Add `afterAll` to log "Login test suite finished"
- [ ] Observe the execution order in the terminal

---

## WEEK 2, DAY 6 – Data-Driven Testing

### LEARN:
- [ ] Parameterized tests with `test.each` (or array iteration)
  👉 https://playwright.dev/docs/test-parameterize

### EXERCISES:
```typescript
// tests/data-driven.spec.ts
import { test, expect } from '@playwright/test';

// Test data — an array of test cases
const loginTestCases = [
  {
    description:    'standard user can login',
    username:       'standard_user',
    password:       'secret_sauce',
    expectedURL:    /inventory/,
    expectedError:  null,
  },
  {
    description:    'locked out user cannot login',
    username:       'locked_out_user',
    password:       'secret_sauce',
    expectedURL:    null,
    expectedError:  'locked out',
  },
  {
    description:    'invalid credentials shows error',
    username:       'invalid_user',
    password:       'invalid_pass',
    expectedURL:    null,
    expectedError:  'Epic sadface',
  },
];

for (const testCase of loginTestCases) {
  test(testCase.description, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('username').fill(testCase.username);
    await page.getByTestId('password').fill(testCase.password);
    await page.getByTestId('login-button').click();

    if (testCase.expectedURL) {
      await expect(page).toHaveURL(testCase.expectedURL);
    }

    if (testCase.expectedError) {
      await expect(page.locator('[data-test="error"]'))
        .toContainText(testCase.expectedError);
    }
  });
}
```

### CHALLENGE:
- [ ] Add 2 more test cases to the array (problem_user, performance_glitch_user)
- [ ] Move the test data to a separate file `test-data/login-users.ts` and import it

---

## WEEK 2, DAY 7 – Week 2 Review + Refactor

### DO:
- [ ] Run all tests: `npx playwright test`
- [ ] Fix any failing tests
- [ ] Refactor: remove code duplication
- [ ] View the HTML report: `npx playwright show-report`
- [ ] Ensure all tests are committed to GitHub

### SELF-CHECK:
- [ ] Can I explain what a Playwright locator is?
- [ ] Can I write a test that fills a form and asserts on a result?
- [ ] Can I use `beforeEach` to avoid duplication?
- [ ] Can I read a Playwright error message?

---

## WEEK 3: Playwright — Forms, Navigation, and Waits
![Week 3](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week3.json)

---

## WEEK 3, DAY 1 – Waiting Strategies (CRITICAL)

### LEARN:
- [ ] Auto-waiting in Playwright
  👉 https://playwright.dev/docs/actionability
- [ ] When to use explicit waits
  👉 https://playwright.dev/docs/waiting

### WHY THIS MATTERS:
> Playwright auto-waits for elements to be visible, enabled, and stable before interacting. You almost never need `page.waitForTimeout()`. Using arbitrary timeouts is a code smell.

### EXERCISES:
```typescript
// tests/waiting.spec.ts
import { test, expect } from '@playwright/test';

test('auto-wait is built in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Playwright waits automatically for this to be visible before clicking
  await page.getByTestId('login-button').click();
  // ❌ BAD — don't do this:
  // await page.waitForTimeout(2000);

  // ✅ GOOD — wait for a specific condition:
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('wait for navigation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');

  // Click and wait for navigation simultaneously
  await Promise.all([
    page.waitForURL(/inventory/),
    page.getByTestId('login-button').click(),
  ]);

  await expect(page).toHaveURL(/inventory/);
});

test('wait for specific element state', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  // Wait for inventory list to be visible
  await page.waitForSelector('.inventory_list');
  const items = await page.locator('.inventory_item').count();
  console.log(`Found ${items} items`);
  expect(items).toBeGreaterThan(0);
});
```

### CHALLENGE:
- [ ] Find a test where you're tempted to use `waitForTimeout` — replace it with a proper wait
- [ ] Log how long a page takes to load using `page.waitForLoadState('networkidle')`

---

## WEEK 3, DAY 2 – Forms + Interactions

### EXERCISES:
```typescript
// tests/forms.spec.ts
import { test, expect } from '@playwright/test';

test('complete product purchase flow', async ({ page }) => {
  // Login
  await page.goto('https://www.saucedemo.com');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  // Add item to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Go to cart
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart/);
  await expect(page.locator('.cart_item')).toHaveCount(1);

  // Checkout
  await page.getByTestId('checkout').click();
  await page.getByTestId('firstName').fill('Cedric');
  await page.getByTestId('lastName').fill('Magno');
  await page.getByTestId('postalCode').fill('1100');
  await page.getByTestId('continue').click();

  // Verify order summary
  await expect(page).toHaveURL(/checkout-step-two/);
  await page.getByTestId('finish').click();
  await expect(page.getByTestId('checkout-complete-container')).toBeVisible();
});
```

### CHALLENGE:
- [ ] Add multiple items to cart and verify the badge count
- [ ] Add a negative test: try to checkout with empty form fields

---

## WEEK 3, DAY 3 – Fixtures (External Test Data)

### LEARN:
- [ ] Playwright Fixtures
  👉 https://playwright.dev/docs/test-fixtures

### DO:
```typescript
// tests/fixtures/users.ts
export const testUsers = {
  standard: { username: 'standard_user',      password: 'secret_sauce' },
  locked:   { username: 'locked_out_user',    password: 'secret_sauce' },
  problem:  { username: 'problem_user',       password: 'secret_sauce' },
  glitch:   { username: 'performance_glitch_user', password: 'secret_sauce' },
};

export const checkoutData = {
  firstName:  'Cedric',
  lastName:   'Magno',
  postalCode: '1100',
};
```

```typescript
// tests/fixtures/base-fixtures.ts
import { test as base, expect } from '@playwright/test';

type Fixtures = { loggedInPage: any };

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL(/inventory/);
    await use(page); // test runs here
    // cleanup could go here
  },
});

export { expect };
```

```typescript
// tests/with-fixtures.spec.ts
import { test, expect } from './fixtures/base-fixtures';

test('already logged in — can add to cart', async ({ loggedInPage: page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
```

---

## WEEK 3, DAY 4 – Page Object Model (POM)

### LEARN:
- [ ] What is Page Object Model?
  👉 https://playwright.dev/docs/pom
  👉 https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/

### WHY POM:
> Without POM: selector changes break every test that uses it.
> With POM: selector changes happen in ONE place only.

### DO:
```
tests/
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── CartPage.ts
├── fixtures/
│   └── users.ts
└── e2e/
    └── checkout-flow.spec.ts
```

```typescript
// tests/pages/LoginPage.ts
import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.getByTestId('username').fill(username);
    await this.page.getByTestId('password').fill(password);
    await this.page.getByTestId('login-button').click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.page.locator('[data-test="error"]').textContent() ?? '';
  }

  async expectError(text: string) {
    await expect(this.page.locator('[data-test="error"]')).toContainText(text);
  }
}
```

```typescript
// tests/pages/InventoryPage.ts
import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart(itemName: string) {
    const slug = itemName.toLowerCase().replace(/ /g, '-');
    await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
  }

  async getCartItemCount(): Promise<string> {
    return await this.page.locator('.shopping_cart_badge').textContent() ?? '0';
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
```

```typescript
// tests/e2e/login-pom.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Login using POM', () => {
  test('valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('invalid login shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_pass');
    await loginPage.expectError('Epic sadface');
  });
});
```

### CHALLENGE:
- [ ] Create a `CartPage.ts` page object
- [ ] Create a `CheckoutPage.ts` page object
- [ ] Refactor the full purchase flow test from Day 2 to use all 4 page objects

---

## WEEK 3, DAY 5 – Multi-Tab + Alerts + Dropdowns

### EXERCISES:
```typescript
// tests/interactions.spec.ts
import { test, expect } from '@playwright/test';

test('handle dropdown/select', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  // Login first
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  // Sort products (dropdown)
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  const firstItem = await page.locator('.inventory_item_name').first().textContent();
  console.log('First item after Z-A sort:', firstItem);
});

test('handle browser alert', async ({ page }) => {
  // Go to a page with an alert
  page.on('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept(); // or dialog.dismiss()
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
});
```

---

## WEEK 3, DAYS 6–7 – Review + Refactor

### CHECKLIST:
- [ ] All tests use Page Object Model
- [ ] Test data is in fixtures files, not hardcoded in tests
- [ ] No `waitForTimeout()` anywhere
- [ ] All tests pass: `npx playwright test`
- [ ] HTML report looks clean
- [ ] Everything pushed to GitHub

---

## WEEK 4: Playwright — Cross-Browser + Advanced Selectors
![Week 4](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week4.json)

---

## WEEK 4, DAYS 1–2 – Cross-Browser Testing

### LEARN:
- [ ] Playwright browser configuration
  👉 https://playwright.dev/docs/browsers

### DO:
```typescript
// playwright.config.ts — enable multiple browsers
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome']  } },
  { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit',   use: { ...devices['Desktop Safari']  } },
  // Mobile
  { name: 'Mobile Chrome',  use: { ...devices['Pixel 5']       } },
  { name: 'Mobile Safari',  use: { ...devices['iPhone 13']     } },
],
```

```bash
npx playwright test --project=firefox       # run in Firefox only
npx playwright test --project=webkit        # run in Safari only
npx playwright test --project="Mobile Chrome" # mobile
```

### EXERCISE:
- [ ] Run your login tests across all 3 browsers
- [ ] Fix any browser-specific failures you find
- [ ] Run in mobile viewport and check if tests still pass

---

## WEEK 4, DAYS 3–5 – Network Interception + Mocking

### LEARN:
- [ ] Intercept network requests
  👉 https://playwright.dev/docs/network

### EXERCISES:
```typescript
// tests/network.spec.ts
import { test, expect } from '@playwright/test';

test('intercept and inspect API calls', async ({ page }) => {
  // Capture all network requests
  const requests: string[] = [];
  page.on('request', req => requests.push(req.url()));

  await page.goto('https://www.saucedemo.com');
  console.log('Requests made:', requests);
});

test('mock an API response', async ({ page }) => {
  // Intercept API call and return fake data
  await page.route('**/api/products', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ id: 1, name: 'Mocked Product', price: 9.99 }]),
    });
  });

  await page.goto('https://your-app.com/products');
  // Now the app receives your mocked data
});

test('simulate 500 server error', async ({ page }) => {
  await page.route('**/api/login', route => {
    route.fulfill({ status: 500, body: 'Server Error' });
  });

  await page.goto('https://your-app.com');
  // Test how your app handles server errors
});
```

---

## WEEK 4, DAYS 6–7 – Review + Week 2-4 Recap

### FINAL CHECKLIST FOR WEEKS 2–4:
- [ ] `tests/pages/` has at least 3 page objects
- [ ] `tests/fixtures/` has test data
- [ ] Tests run cross-browser
- [ ] No hardcoded waits, no magic strings
- [ ] HTML reports clean
- [ ] Pushed to GitHub with meaningful commit messages

---

# 🔵 WEEK 5–6: TypeScript + Framework Design
![Week 5-6](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week5-6.json)

---

## WEEK 5: TypeScript for Playwright
![Week 5](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week5.json)

📚 Resources: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook)

### WHY TYPESCRIPT:
- Catch bugs before running tests
- Autocomplete in VS Code (intellisense)
- Required for most professional Playwright projects

---

## WEEK 5, DAYS 1–2 – Types + Interfaces

### LEARN:
- [ ] Basic types
  👉 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- [ ] Interfaces
  👉 https://www.typescriptlang.org/docs/handbook/2/objects.html

### EXERCISES:
```typescript
// types/test-types.ts

// Basic types
const username: string  = "admin";
const attempts: number  = 0;
const isLoggedIn: boolean = false;
const roles: string[]   = ["admin", "user", "manager"];

// Interface
interface User {
  username: string;
  password: string;
  role:     "admin" | "user" | "manager";  // union type
  active:   boolean;
  loginCount?: number;  // optional
}

// Type-safe user objects
const testUsers: User[] = [
  { username: "admin",    password: "admin123",  role: "admin", active: true  },
  { username: "standard", password: "pass123",   role: "user",  active: true  },
  { username: "locked",   password: "pass123",   role: "user",  active: false },
];

// Type-safe function
function getActiveUsers(users: User[]): User[] {
  return users.filter(user => user.active);
}

// Type-safe return
function getUser(username: string): User | undefined {
  return testUsers.find(u => u.username === username);
}
```

---

## WEEK 5, DAYS 3–4 – Type Functions + Generics

### EXERCISES:
```typescript
// Function with typed parameters and return
async function login(
  page: Page,
  username: string,
  password: string
): Promise<boolean> {
  await page.goto('https://www.saucedemo.com');
  await page.getByTestId('username').fill(username);
  await page.getByTestId('password').fill(password);
  await page.getByTestId('login-button').click();

  try {
    await page.waitForURL(/inventory/, { timeout: 3000 });
    return true;
  } catch {
    return false;
  }
}

// Generic function
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstUser = getFirst<User>(testUsers);
```

---

## WEEK 5, DAYS 5–6 – Convert Test Files to TypeScript

### DO:
- [ ] Ensure all `.js` files are `.ts` files (Playwright creates `.ts` by default)
- [ ] Add types to all page object methods
- [ ] Add types to all fixture objects

### EXERCISE — Typed Page Object:
```typescript
// pages/LoginPage.ts (fully typed)
import { Page, Locator, expect } from '@playwright/test';

interface LoginCredentials {
  username: string;
  password: string;
}

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton:   Locator;
  private readonly errorMessage:  Locator;

  constructor(private page: Page) {
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton   = page.getByTestId('login-button');
    this.errorMessage  = page.locator('[data-test="error"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(credentials: LoginCredentials): Promise<void> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
  }

  async getErrorText(): Promise<string> {
    return await this.errorMessage.textContent() ?? '';
  }

  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async expectErrorContaining(text: string): Promise<void> {
    await expect(this.errorMessage).toContainText(text);
  }
}
```

---

## WEEK 5, DAY 7 – Fix Errors + TypeScript Review

### CHECKLIST:
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] All page objects fully typed
- [ ] All test data has proper interfaces
- [ ] All tests still pass

---

## WEEK 6: Framework Design + Best Practices
![Week 6](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week6.json)

---

## WEEK 6, DAYS 1–3 – Full Framework Structure

### TARGET FOLDER STRUCTURE:
```
playwright-training/
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── tests/
│   ├── e2e/                    # end-to-end tests
│   │   ├── login.spec.ts
│   │   ├── checkout.spec.ts
│   │   └── inventory.spec.ts
│   ├── api/                    # API tests
│   │   └── products-api.spec.ts
│   ├── pages/                  # Page Object Model
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── fixtures/               # test data + custom fixtures
│   │   ├── users.ts
│   │   ├── checkout-data.ts
│   │   └── base-fixtures.ts
│   └── utils/                  # helpers
│       ├── test-helpers.ts
│       └── api-helpers.ts
└── reports/                    # generated reports
```

### DO:
- [ ] Reorganize your existing tests into this structure
- [ ] Create missing page objects
- [ ] Create `utils/test-helpers.ts` for common utility functions

---

## WEEK 6, DAYS 4–5 – Reporter Configuration

### LEARN:
- [ ] Built-in reporters
  👉 https://playwright.dev/docs/test-reporters

### DO:
```typescript
// playwright.config.ts
reporter: [
  ['html',  { outputFolder: 'reports/html', open: 'never' }],
  ['json',  { outputFile:   'reports/results.json' }],
  ['list'], // console output
],
```

---

## WEEK 6, DAYS 6–7 – Full Framework Review

### FINAL CHECKLIST FOR WEEKS 5–6:
- [ ] All code is TypeScript with no type errors
- [ ] Full folder structure in place
- [ ] All 4 page objects created
- [ ] Tests organized in `e2e/` and `api/` folders
- [ ] Custom fixtures working
- [ ] HTML reports generating correctly

---

# 🟡 WEEK 7–8: Advanced Playwright + API Testing
---

## WEEK 7: API Testing with Playwright
![Week 7](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week7.json)

### LEARN:
- [ ] Playwright API Testing
  👉 https://playwright.dev/docs/api-testing

### TEST SITES:
- https://jsonplaceholder.typicode.com
- https://reqres.in

---

## WEEK 7, DAY 1 – GET Requests

### EXERCISES:
```typescript
// tests/api/jsonplaceholder.spec.ts
import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder API', () => {

  test('GET /posts returns 100 posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(200);
    const posts = await response.json();
    expect(posts).toHaveLength(100);
  });

  test('GET /posts/1 returns correct post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post).toHaveProperty('id', 1);
    expect(post).toHaveProperty('title');
    expect(post.title).toBeTruthy();
  });

  test('GET /users returns user array', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);

    // Validate structure of first user
    const firstUser = users[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('name');
    expect(firstUser).toHaveProperty('email');
  });

});
```

---

## WEEK 7, DAY 2 – POST, PUT, DELETE

### EXERCISES:
```typescript
// tests/api/crud.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('CRUD Operations', () => {

  test('POST /posts creates a new post', async ({ request }) => {
    const newPost = { title: 'Automation Test Post', body: 'Created by Playwright', userId: 1 };
    const response = await request.post(`${BASE_URL}/posts`, { data: newPost });

    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created.title).toBe(newPost.title);
    expect(created.id).toBeDefined();
  });

  test('PUT /posts/1 updates a post', async ({ request }) => {
    const updated = { id: 1, title: 'Updated Title', body: 'Updated body', userId: 1 };
    const response = await request.put(`${BASE_URL}/posts/1`, { data: updated });

    expect(response.status()).toBe(200);
    const result = await response.json();
    expect(result.title).toBe('Updated Title');
  });

  test('PATCH /posts/1 partially updates a post', async ({ request }) => {
    const response = await request.patch(`${BASE_URL}/posts/1`, {
      data: { title: 'Patched Title' }
    });

    expect(response.status()).toBe(200);
    const result = await response.json();
    expect(result.title).toBe('Patched Title');
  });

  test('DELETE /posts/1 deletes a post', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
  });

  test('GET non-existent post returns 404', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/99999`);
    expect(response.status()).toBe(404);
  });

});
```

---

## WEEK 7, DAY 3 – API + UI Combined Testing

### LEARN:
- [ ] Use API to set up state, then test UI
  👉 https://playwright.dev/docs/auth

### EXERCISES:
```typescript
// tests/e2e/api-ui-combo.spec.ts
import { test, expect } from '@playwright/test';

test('use API to verify UI data', async ({ page, request }) => {
  // 1. Get expected data via API
  const apiResponse = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  const apiData = await apiResponse.json();

  // 2. Navigate to UI
  await page.goto('https://your-app.com/posts/1');

  // 3. Verify UI shows same data as API
  await expect(page.locator('h1')).toContainText(apiData.title);
});

test('login via API, then navigate in browser', async ({ page, request }) => {
  // 1. Authenticate via API to get token
  const loginResponse = await request.post('https://reqres.in/api/login', {
    data: { email: 'eve.holt@reqres.in', password: 'cityslicka' }
  });

  const { token } = await loginResponse.json();
  console.log('Got token:', token);

  // 2. You could now set cookies/localStorage in the browser
  // This technique dramatically speeds up tests by bypassing UI login
  await page.goto('https://your-app.com');
  // ... continue test with authenticated session
});
```

---

## WEEK 7, DAYS 4–5 – Authentication Strategies

### LEARN:
- [ ] Saving auth state (login once, reuse across tests)
  👉 https://playwright.dev/docs/auth

### DO:
```typescript
// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL(/inventory/);

  // Save the authenticated state
  await page.context().storageState({ path: authFile });
});
```

```typescript
// playwright.config.ts
projects: [
  {
    name: 'setup',
    testMatch: /auth.setup/,
  },
  {
    name: 'e2e',
    use: {
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup'],
  },
],
```

### BENEFIT: Every test in the `e2e` project starts already logged in. Login happens once, not before every test.

---

## WEEK 7, DAYS 6–7 – Visual Testing (Screenshots)

### LEARN:
- [ ] Visual comparisons (screenshot diffing)
  👉 https://playwright.dev/docs/test-snapshots

### EXERCISES:
```typescript
// tests/visual/visual.spec.ts
import { test, expect } from '@playwright/test';

test('login page visual snapshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // First run: creates the baseline screenshot
  // Subsequent runs: compares against baseline
  await expect(page).toHaveScreenshot('login-page.png');
});

test('element snapshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  const logo = page.locator('.login_logo');
  await expect(logo).toHaveScreenshot('logo.png');
});
```

```bash
npx playwright test --update-snapshots  # update baselines
```

---

## WEEK 8: Advanced Topics
![Week 8](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week8.json)

---

## WEEK 8, DAYS 1–3 – Parallel Execution + Retries

### LEARN:
- [ ] Parallel execution
  👉 https://playwright.dev/docs/test-parallel
- [ ] Retries
  👉 https://playwright.dev/docs/test-retries

### DO:
```typescript
// playwright.config.ts
fullyParallel: true,    // run all tests in parallel
workers: 4,             // use 4 workers
retries: 2,             // retry failed tests up to 2 times
```

```typescript
// In test file — override parallelism
test.describe.configure({ mode: 'serial' }); // run THIS group serially
```

### EXERCISE:
- [ ] Enable `fullyParallel: true` and run your test suite
- [ ] Observe how much faster tests run
- [ ] Find any tests that fail in parallel (shared state problems)
- [ ] Fix them by using isolated test data

---

## WEEK 8, DAYS 4–5 – Accessibility Testing

### LEARN:
- [ ] Accessibility with axe-core
  👉 https://playwright.dev/docs/accessibility-testing

```bash
npm install @axe-core/playwright
```

```typescript
// tests/a11y/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('login page has no accessibility violations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

---

## WEEK 8, DAYS 6–7 – Week 7–8 Final Review

### FINAL CHECKLIST:
- [ ] API tests: GET, POST, PUT, DELETE all covered
- [ ] Auth state setup working
- [ ] Tests run in parallel
- [ ] Retries configured
- [ ] Visual snapshots created
- [ ] Accessibility tests added
- [ ] All pushed to GitHub

---

# 🔴 WEEK 9: CI/CD + GitHub Actions
![Week 9](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week9.json)

📚 Resources:
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Playwright CI Guide](https://playwright.dev/docs/ci-github-actions)

---

## WEEK 9, DAY 1 – What is CI/CD?

### LEARN:
- [ ] What is CI/CD?
  👉 https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions
- [ ] Why run tests in the pipeline?
  👉 https://martinfowler.com/articles/continuousIntegration.html

### KEY CONCEPT:
> CI/CD means: every time you push code to GitHub, your tests run automatically.
> If tests fail, the push is blocked. This prevents broken code from going to production.

---

## WEEK 9, DAYS 2–3 – Create Your First Pipeline

### DO:
```yaml
# .github/workflows/playwright.yml
name: Playwright Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test

      - name: Upload HTML report
        uses: actions/upload-artifact@v4
        if: always()   # upload even if tests fail
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

### EXERCISE:
- [ ] Create this file in your repo
- [ ] Push to GitHub
- [ ] Go to GitHub → Actions tab — watch tests run
- [ ] Break a test intentionally and push — see the pipeline fail
- [ ] Fix it and push again — see it pass

---

## WEEK 9, DAYS 4–5 – Advanced Pipeline Configuration

### ADVANCED YAML:
```yaml
# Run tests in parallel across multiple OS
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    browser: [chromium, firefox, webkit]

# Run only specific tests in CI
- name: Run smoke tests
  run: npx playwright test --grep @smoke

# Different commands per environment
- name: Run tests
  run: npx playwright test
  env:
    BASE_URL: ${{ secrets.STAGING_URL }}
    TEST_USERNAME: ${{ secrets.TEST_USERNAME }}
    TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
```

### DO:
- [ ] Add `@smoke` tag to your most critical tests
- [ ] Create a separate smoke-tests pipeline that runs on every push
- [ ] Store test credentials as GitHub Secrets (not hardcoded!)

---

## WEEK 9, DAYS 6–7 – Allure Reporter (Optional But Impressive)

```bash
npm install allure-playwright allure-commandline --save-dev
```

```typescript
// playwright.config.ts
reporter: [
  ['allure-playwright'],
  ['html'],
],
```

```yaml
# In GitHub Actions
- name: Generate Allure report
  run: npx allure generate allure-results --clean -o allure-report

- name: Upload Allure report
  uses: actions/upload-artifact@v4
  with:
    name: allure-report
    path: allure-report/
```

---

# 🚀 WEEK 10: Portfolio Project
![Week 10](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week10.json)

---

## Build a REAL, Impressive Test Suite

**Target Application:** https://www.saucedemo.com

### REQUIREMENTS:
```
portfolio-project/
├── playwright.config.ts
├── .github/workflows/playwright.yml
├── README.md                    ← explain your framework!
├── tests/
│   ├── e2e/
│   │   ├── login.spec.ts        (positive + negative)
│   │   ├── inventory.spec.ts    (sorting, filtering)
│   │   ├── cart.spec.ts         (add, remove, persist)
│   │   └── checkout.spec.ts     (full flow)
│   ├── api/
│   │   └── (bonus: any API you want)
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── fixtures/
│   │   ├── users.ts
│   │   └── base-fixtures.ts
│   └── utils/
│       └── test-helpers.ts
└── reports/
```

### MINIMUM TEST COVERAGE:
- [ ] Login: valid, invalid, locked, empty fields, all user types
- [ ] Inventory: sort A-Z, Z-A, price low-high, price high-low
- [ ] Cart: add single item, add multiple, remove item, empty cart
- [ ] Checkout: full happy path, missing info validation
- [ ] At least 1 visual snapshot test
- [ ] At least 1 accessibility test
- [ ] CI/CD pipeline running all tests on push

### README MUST INCLUDE:
- [ ] What the project tests
- [ ] How to install and run
- [ ] Framework decisions (why POM, why fixtures, etc.)
- [ ] CI/CD badge from GitHub Actions
- [ ] Screenshot of the Playwright report

---

# ➕ SUPPLEMENTAL WEEK 11–12: Cypress (Secondary Skill)

> **When to use Cypress:** Teams doing heavy front-end JavaScript development, or when you join a company that already uses it. Cypress's in-browser debugging and real-time reload are excellent for front-end developers.

📚 Resources: [Cypress Docs](https://docs.cypress.io)

---
![Week 11](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week11.json)

## WEEK 11, DAYS 1–2 – Setup + First Test

```bash
npm init -y
npm install cypress --save-dev
npx cypress open
```

```javascript
// cypress/e2e/login.cy.js
describe('SauceDemo Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('valid login redirects to inventory', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
  });

  it('invalid login shows error', () => {
    cy.get('[data-test="username"]').type('wrong_user');
    cy.get('[data-test="password"]').type('wrong_pass');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface');
  });
});
```

---

## WEEK 11, DAYS 3–5 – Fixtures + Custom Commands

```javascript
// cypress/fixtures/users.json
{
  "standard": { "username": "standard_user", "password": "secret_sauce" },
  "locked":   { "username": "locked_out_user", "password": "secret_sauce" }
}
```

```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

// Usage in tests:
cy.login('standard_user', 'secret_sauce');
```

---

## WEEK 11, DAYS 6–7 – API Testing in Cypress

```javascript
cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
  .its('status').should('eq', 200);

cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
  title: 'test',
  body: 'body',
  userId: 1,
}).then(response => {
  expect(response.status).to.eq(201);
  expect(response.body.title).to.eq('test');
});
```

---

## WEEK 12: Cypress — POM + CI/CD
![Week 12](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week12.json)

### WEEK 12, DAYS 1–4 – Cypress Page Objects

```javascript
// cypress/pages/LoginPage.js
class LoginPage {
  visit()                  { cy.visit('https://www.saucedemo.com'); }
  typeUsername(username)   { cy.get('[data-test="username"]').type(username); }
  typePassword(password)   { cy.get('[data-test="password"]').type(password); }
  clickLogin()             { cy.get('[data-test="login-button"]').click(); }
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}
export default new LoginPage();
```

### WEEK 12, DAYS 5–7 – Cypress CI/CD

```yaml
# .github/workflows/cypress.yml
name: Cypress Tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cypress-io/github-action@v6
        with:
          command: npx cypress run
```

### CYPRESS vs PLAYWRIGHT — KEY DIFFERENCES TO REMEMBER:
| | Cypress | Playwright |
|---|---|---|
| Execution | Inside browser | Via DevTools Protocol |
| Multi-tab | ❌ | ✅ |
| Multi-browser | Limited Safari | Full cross-browser |
| Parallel | Paid | Free |
| Mobile | ❌ (viewport only) | ✅ |
| Auto-wait | Yes | Yes (better) |
| Time-travel debug | ✅ Excellent | ✅ Via Trace Viewer |

---

# ➕ SUPPLEMENTAL WEEK 13–14: Selenium (Enterprise/Legacy)

> **When to use Selenium:** When applying to large enterprise companies (banking, insurance, government, telco) that have existing Java-based test suites. Knowing Selenium significantly widens your job options.

📚 Resources: [Selenium Docs](https://www.selenium.dev/documentation/) · [Selenium with Java](https://www.selenium.dev/documentation/webdriver/)

---

## WEEK 13: Selenium + Java Basics
![Week 13](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week13.json)

### LEARN:
- [ ] What is WebDriver?
  👉 https://www.selenium.dev/documentation/webdriver/
- [ ] Setting up Selenium + Java (Maven project)
  👉 https://www.selenium.dev/documentation/webdriver/getting_started/install_library/

### INSTALL (Java + Maven required):
```xml
<!-- pom.xml -->
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-java</artifactId>
  <version>4.x.x</version>
</dependency>
<dependency>
  <groupId>org.testng</groupId>
  <artifactId>testng</artifactId>
  <version>7.x.x</version>
</dependency>
```

```java
// First Selenium test (Java)
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;

public class LoginTest {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");

    driver.findElement(By.id("user-name")).sendKeys("standard_user");
    driver.findElement(By.id("password")).sendKeys("secret_sauce");
    driver.findElement(By.id("login-button")).click();

    System.out.println("Current URL: " + driver.getCurrentUrl());
    driver.quit();
  }
}
```

---

## WEEK 14: Selenium POM + TestNG
![Week 14](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week14.json)

```java
// pages/LoginPage.java
public class LoginPage {
  private WebDriver driver;

  public LoginPage(WebDriver driver) {
    this.driver = driver;
  }

  public void login(String username, String password) {
    driver.findElement(By.id("user-name")).sendKeys(username);
    driver.findElement(By.id("password")).sendKeys(password);
    driver.findElement(By.id("login-button")).click();
  }
}
```

```java
// tests/LoginTest.java (TestNG)
import org.testng.annotations.*;

public class LoginTest {
  WebDriver driver;
  LoginPage loginPage;

  @BeforeMethod
  public void setUp() {
    driver = new ChromeDriver();
    loginPage = new LoginPage(driver);
    driver.get("https://www.saucedemo.com");
  }

  @Test
  public void testValidLogin() {
    loginPage.login("standard_user", "secret_sauce");
    Assert.assertTrue(driver.getCurrentUrl().contains("inventory"));
  }

  @AfterMethod
  public void tearDown() {
    driver.quit();
  }
}
```

---

# ➕ SUPPLEMENTAL WEEK 15: Mobile Testing with Appium
![Week 15](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week15.json)

> **When to use Appium:** QA roles that test native iOS/Android apps. High-value skill, less common in pure web roles.

📚 Resources: [Appium Docs](https://appium.io/docs/en/latest/)

### SETUP:
```bash
npm install -g appium
appium driver install uiautomator2  # Android
appium driver install xcuitest      # iOS (Mac only)
```

### LEARN:
- [ ] What is Appium?
  👉 https://appium.io/docs/en/latest/intro/
- [ ] Desired Capabilities
  👉 https://appium.io/docs/en/latest/guides/caps/
- [ ] Mobile selectors (different from web!)
  👉 https://appium.io/docs/en/latest/guides/finding-elements/

### EXERCISE (Android via Emulator):
```javascript
// appium-test.js
const { remote } = require('webdriverio');

const capabilities = {
  platformName:    'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:app':     '/path/to/your/app.apk',
  'appium:automationName': 'UiAutomator2',
};

async function runTest() {
  const driver = await remote({
    hostname: 'localhost',
    port: 4723,
    capabilities,
  });

  const loginButton = await driver.$('//android.widget.Button[@text="Login"]');
  await loginButton.click();

  await driver.deleteSession();
}

runTest();
```

---

# ➕ SUPPLEMENTAL WEEK 16: AI-Assisted Testing
![Week 16](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week16.json)

> **Why this matters:** AI-augmented testing is growing fast. 70% of enterprises are expected to adopt AI testing by 2028. This is the direction the industry is heading.

---

## TOPICS TO EXPLORE:

### 1. Playwright Codegen (Built-in AI-like recording)
```bash
npx playwright codegen https://www.saucedemo.com
```
> Records your interactions and generates Playwright code automatically. Great for bootstrapping tests fast.

### 2. GitHub Copilot for Tests
- [ ] Enable Copilot in VS Code
- [ ] Write a comment: `// test that login fails with wrong password`
- [ ] Let Copilot suggest the test code
- [ ] Review, correct, and learn from the suggestion

### 3. Playwright MCP (AI-controlled browser)
- [ ] Learn about Playwright's Model Context Protocol integration
  👉 https://playwright.dev/docs/mcp
- [ ] Understand how AI agents can control browsers via Playwright

### 4. Self-Healing Tests
- [ ] Research tools like Healenium, Testim, or Mabl
  👉 https://healenium.io
- [ ] Understand the concept: tests that auto-fix broken selectors

### KEY SKILLS FOR AI-AUGMENTED TESTING:
- [ ] Writing clear, descriptive test names (AI uses these as context)
- [ ] Using semantic selectors (role, label, text) — AI generates these better
- [ ] Understanding what AI-generated tests get wrong (hallucinations)
- [ ] Reviewing and validating AI suggestions critically

---

# 🚀 NEXT STEPS + CAREER ROADMAP

## Immediate (After Week 10):
1. **Polish your GitHub portfolio**
   - Pin your automation-training repo
   - Write a great README with a CI/CD badge
   - Record a short screen demo of your tests running

2. **Build a portfolio project from scratch**
   - Pick any public site (OpenCart, Magento demo, DemoQA)
   - Write a full test suite with POM + API + CI/CD
   - Use TypeScript throughout

3. **Learn test reporting**
   - Allure Reports (most used in enterprise)
   - Playwright's built-in HTML reporter

## Medium-term (3–6 months):
4. **Add high-value skills** (appear in 60%+ of job postings):
   - Docker basics (run tests in containers)
   - SQL basics (validate data in databases)
   - Postman (API exploration)
   - JIRA (defect tracking)

5. **Certifications (optional but helpful):**
   - ISTQB Foundation Level
   - AWS/Azure basics (cloud CI/CD)

## Job Titles to Target:
| Title | Focus | Level |
|---|---|---|
| QA Automation Engineer | Playwright/Cypress | Junior–Mid |
| SDET | Full stack testing | Mid–Senior |
| QA Engineer (Automation) | UI + API | Junior |
| Test Automation Engineer | Framework design | Mid |

---

# ⚠️ COMMON MISTAKES

| Mistake | Why It's Bad | Fix |
|---|---|---|
| Using `waitForTimeout(3000)` | Hard waits = slow + fragile tests | Wait for specific element/URL/state |
| CSS class selectors (`.btn-login`) | Classes change often | Use `data-testid`, role, or label |
| XPath everywhere | Hard to read, brittle | Use Playwright locators |
| No POM (selectors in every test) | One UI change = 50 test updates | Use Page Object Model |
| Copy-pasting without understanding | You can't debug what you don't understand | Type code manually, read the docs |
| Not committing daily | Lose progress, no portfolio evidence | Push to GitHub every session |
| Ignoring TypeScript errors | Bugs caught too late | Fix all TS errors: `npx tsc --noEmit` |
| Hardcoding credentials in test files | Security risk, hard to maintain | Use env variables or secrets |

---

# 📋 INTERVIEW PREP CHEAT SHEET

**Questions you should be able to answer:**

### Framework Questions:
- Why did you choose Playwright over Cypress or Selenium?
- Explain how Playwright's auto-waiting works
- What is the Page Object Model and why do you use it?
- How do you handle flaky tests?

### Practical Questions:
- Walk me through your test framework structure
- How do you run tests in CI/CD?
- How do you test APIs with Playwright?
- How do you handle test data?

### Scenario Questions:
- A test that was passing is now failing. How do you investigate?
- Your team wants to add automation to a legacy app. What do you do?
- A developer says "why do we need tests, it slows us down?" — what do you say?

**Your answers should reference your actual GitHub projects.**

---

# 📊 FINAL NOTE

This plan was designed for hands-on learners. If you follow it:

- ✅ You'll write real code every day
- ✅ You'll build a production-quality framework
- ✅ You'll understand Playwright deeply — not just copy-paste
- ✅ You'll have GitHub proof of your skills
- ✅ You'll be ready for junior/mid SDET interviews

**The industry is moving fast. Playwright is the right bet for 2026.**

---
