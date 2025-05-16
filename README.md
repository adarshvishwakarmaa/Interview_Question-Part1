# 💡 JavaScript & React Interview Notes – Part 1

This project contains summarized notes for key JavaScript and React topics commonly asked in technical interviews. These notes are implemented and explored in the `demo.js` file of this repository.

---

## 🔁 array_reverse

- The `array.reverse()` method reverses the elements of an array **in place**, meaning it modifies the original array.
- Commonly used when you need to reverse the order of items, such as displaying the most recent item first.

---

## 🔄 Callback Function

- A **callback** is a function passed as an argument to another function and is executed after a task completes.
- Used in asynchronous operations, event handling, and functional programming techniques.

---

## 🔐 Closure

- A **closure** is a function that remembers variables from its **lexical scope**, even when executed outside that scope.
- Useful for data privacy, currying, and function factories.

---

## 🧠 Hoisting

- **Hoisting** is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope.
- `var` declarations are hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but not initialized, leading to a **temporal dead zone**.

---

## 🧵 Promise

- A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.
- Has three states: `pending`, `fulfilled`, and `rejected`.
- Provides cleaner syntax over callback-based async handling.

---

## ⏱️ setInterval & setTimeout

- `setTimeout`: Executes a function **once** after a specified delay.
- `setInterval`: Repeats execution of a function **at regular intervals**.
- Both return a timer ID which can be cleared using `clearTimeout` or `clearInterval`.

---

## ⚛️ Class Component vs Function Component (React)

| Feature               | Class Component              | Function Component             |
|-----------------------|------------------------------|--------------------------------|
| Syntax                | ES6 class                    | Regular JavaScript function    |
| State                 | `this.state` & `setState()`  | `useState()` hook              |
| Lifecycle Methods     | Available (e.g. `componentDidMount`) | Handled using `useEffect()` |
| Performance           | Slightly heavier             | Lighter & preferred in modern React |
| `this` Keyword        | Required                     | Not needed                     |

---

## 📦 NPM vs Yarn

| Feature     | NPM                           | Yarn                          |
|-------------|-------------------------------|-------------------------------|
| Maintained By | Node.js team                 | Meta (formerly Facebook)      |
| Speed       | Slower dependency install     | Faster due to parallelization |
| Lock Files  | `package-lock.json`           | `yarn.lock`                   |
| Commands    | `npm install`, `npm run` etc. | `yarn add`, `yarn start` etc. |

---

## 🔁 Flux Architecture (React)

- **Flux** is a pattern for managing application state and data flow in large React applications.
- Core Concepts:
  - **Store**: Holds application state.
  - **Actions**: Plain objects describing what happened.
  - **Dispatcher**: Central hub to manage actions.
  - **View**: React components that listen to the store.

---

## 🧲 Event Listener

- **Event listeners** detect and respond to user or system events such as clicks, key presses, etc.
- Attach using methods like `addEventListener()`.
- Crucial for interactive UI and DOM manipulation.

---

## 📁 Demo File

All the above concepts are practically implemented and demonstrated inside the `demo.js` file for easy reference and practice.

---

## 📚 Purpose

This README and the associated demo code help in:
- Revising core JS/React concepts quickly
- Strengthening interview preparation
- Serving as a reference before coding rounds

---

## 📌 Author

Adarsh – Full Stack Developer (MERN Stack)  


---
