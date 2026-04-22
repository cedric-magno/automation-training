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

- [HOW TO USE THIS PLAN](#how-to-use-this-daily-plan)
- [WEEK 0–1: JavaScript](#week-01-javascript-for-testers-foundation)
  - [Day 1](#day-1--variables--console)
  - [Day 2](#day-2--functions-core)
  - [Day 3](#day-3--arrays)
  - [Day 4](#day-4--objects-very-important)
  - [Day 5](#day-5--combine-arrays--objects)
  - [Day 6](#day-6--asyncawait-critical)
  - [Day 7](#day-7--mini-project)
- [WEEK 2: Cypress Basics](#week-2-cypress-basics)
- [WEEK 3: Cypress Advanced](#week-3-cypress-advanced)
- [WEEK 4–5: TypeScript](#week-45-typescript-transition)
- [WEEK 6: Framework Design](#week-6-framework-design)
- [WEEK 7–8: Playwright + CI/CD](#week-78-playwright--cicd)

---

# 🧭 HOW TO USE THIS DAILY PLAN

Each day (1 hour):
- 15 min → Read/watch (linked resource)
- 45 min → Code (guided tasks below)

Always:
- Push code to GitHub  
  `C:\Users\Cedric\ced-projects\automation-training`  
  https://github.com/cedric-magno/automation-training  
- Write 1–2 notes (what you learned / struggled with)

---

# 🔵 WEEK 0–1: JavaScript for Testers (FOUNDATION)
![Week 0-1](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week0-1.json)

📚 Use:
- JavaScript.info → Fundamentals section  
- MDN Web Docs → for examples  

---

## 🟢 DAY 1 – Variables + Console - COMPLETED

### LEARN:
- [x] What is a variable?
- [x] Difference between const and let

### DO:
- [x] Create variables: username, password, isLoggedIn
- [x] Print them using console.log

### EXERCISE:
- [x] Change values and observe output

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

## 🟢 DAY 2 – Functions (CORE) - COMPLETED

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

### OUTPUT:
- [x] 3 working functions

### Notes:
Reference: Functions  

---

## 📅 DAY 3 – Arrays

### LEARN:
- [x] Arrays and looping concepts
- [x] map() and filter()

### DO:
- [x] Create array of users
- [x] Extract usernames using map()

### EXERCISE:
- [x] Filter active users
- [x] Count users

### OUTPUT:
- [x] 3 array operations

---

## 📅 DAY 4 – Objects (VERY IMPORTANT)

### LEARN:
- [ ] Object structure
- [X] Accessing properties

### DO:
- [ ] Create user object:
    { username, password, role }

### EXERCISE:
- [ ] Modify object values
- [ ] Combine with array (list of users)

### OUTPUT:
- [ ] Array of objects (test data)

---

## 📅 DAY 5 – Combine Arrays + Objects

### LEARN:
- [ ] Real-world data structures

### DO:
- [ ] Create test data:
  multiple users with roles

### EXERCISE:
- [ ] Filter admin users
- [ ] Get usernames only

### OUTPUT:
- [ ] Test data simulation ready

---

## 📅 DAY 6 – Async/Await (CRITICAL)

### LEARN:
- [ ] What is async/await?
- [ ] Why async matters in testing

### DO:
- [ ] Create async function returning data

### EXERCISE:
- [ ] Simulate API call (setTimeout or promise)

### OUTPUT:
- [ ] 2 async functions

---

## 📅 DAY 7 – Mini Project

### BUILD:
- [ ] Fake login system

### REQUIREMENTS:
- [ ] Validate user credentials
- [ ] Return success/failure

### OUTPUT:
- [ ] Small working JS program

---

# 🔵 WEEK 2: Cypress Basics
![Week 2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week2.json)

📚 Use:
- Cypress Documentation

---

## 📅 DAY 1 – Setup Cypress

### LEARN:
- [ ] What is Cypress?
- [ ] Test structure (describe, it)

### DO:
- [ ] Install Cypress
- [ ] Run sample test

### OUTPUT:
- [ ] Cypress project running

---

## 📅 DAY 2 – First Test

### LEARN:
- [ ] cy.visit
- [ ] cy.get

### DO:
- [ ] Open a demo site
- [ ] Check page loads

### EXERCISE:
- [ ] Assert URL or title

### OUTPUT:
- [ ] 1 working test

---

## 📅 DAY 3 – Login Test

### DO:
- [ ] Enter username/password
- [ ] Click login

### EXERCISE:
- [ ] Add success assertion
- [ ] Add failure test

### OUTPUT:
- [ ] 2 login tests

---

## 📅 DAY 4 – Selectors

### LEARN:
- [ ] Good vs bad selectors

### DO:
- [ ] Replace fragile selectors

### OUTPUT:
- [ ] Stable selectors used

---

## 📅 DAY 5 – Form Testing

### DO:
- [ ] Fill form fields
- [ ] Submit form

### OUTPUT:
- [ ] 1 form test

---

## 📅 DAY 6 – Refactor

### DO:
- [ ] Clean code
- [ ] Remove duplication

### OUTPUT:
- [ ] Improved readability

---

## 📅 DAY 7 – Review

### DO:
- [ ] Fix failing tests
- [ ] Re-run all tests

---

# 🔵 WEEK 3: Cypress Advanced
![Week 3](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week3.json)

## 📅 DAY 1 – Fixtures
- [ ] Create JSON test data
- [ ] Use cy.fixture()

### OUTPUT:
- [ ] External test data used

## 📅 DAY 2 – Custom Commands
- [ ] Create cy.login()

### OUTPUT:
- [ ] Reusable command

## 📅 DAY 3 – API Testing
- [ ] cy.request GET

### OUTPUT:
- [ ] API test

## 📅 DAY 4 – POST Request
- [ ] Send POST request
- [ ] Validate response

### OUTPUT:
- [ ] API validation test

## 📅 DAY 5 – Hooks
- [ ] beforeEach setup

### OUTPUT:
- [ ] Cleaner test flow

## 📅 DAY 6 – Refactor
- [ ] Remove duplication
- [ ] Improve structure

## 📅 DAY 7 – REVIEW + PREP FOR TS

### CHECK:
- [ ] Comfortable with Cypress?
- [ ] Can debug basic issues?

---

# 🔁 WEEK 4–5: TypeScript Transition
![Week 4-5](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week4-5.json)

📚 Use:
- TypeScript Documentation

## 📅 KEY DAILY PATTERN

### Day 1–2:
- [ ] Add types to variables

### Day 3–4:
- [ ] Type functions

### Day 5–6:
- [ ] Convert Cypress tests to TS

### Day 7:
- [ ] Fix errors + review

---

# 🟡 WEEK 6: Framework Design
![Week 6](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week6.json)

- [ ] Create Page Objects
- [ ] Move selectors out of tests
- [ ] Separate test data
- [ ] Clean folder structure

---

# 🔴 WEEK 7–8: Playwright + CI/CD
![Week 7-8](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cedric-magno/automation-training/main/.github/progress-week7-8.json)

📚 Use:
- Playwright
- GitHub Actions

## 📅 KEY TASKS

- [ ] Install Playwright
- [ ] Write login test
- [ ] Convert Cypress tests
- [ ] Run multi-browser tests
- [ ] Setup CI/CD pipeline

---

# 📊 FINAL NOTE

This version removes guesswork. If you follow it:

- You’ll code every day  
- You’ll build real projects  
- You’ll understand what you’re doing (not just copy)