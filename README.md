# Dev Stack

A responsive React website for exploring technologies and building a personal development stack.

## Tech used

- React + Vite
- JavaScript (ES6+)
- React Toastify
- JSON data
- CSS responsive layout
- Lucide React icons

## Features

1. Technology cards are loaded from a separate JSON file.
2. Users can add/remove technologies and manage their stack.
3. Responsive navbar, hero, technology grid, sidebar, loading state, and footer.
4. Selected technology cards show the shared orange → pink → violet gradient border.
4. React Toastify gives feedback for add, duplicate, remove, and remove-all actions.
5. Shared orange → pink → violet gradient is defined once in CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## React questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to describe what the page should look like.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child. State is data owned by a component that can change and cause the UI to update.

### 3. What does useState do, and where did you use it?
`useState` creates component state. I used it for the selected technology stack and for opening/closing the mobile navbar.

### 4. What does useEffect do, and why did you need it?
`useEffect` runs side effects after rendering. I used it to simulate fetching the local JSON data and to control the loading state.

### 5. Why does every .map() item need a unique key?
React uses the key to identify each item when a list changes. A stable unique key helps React update the correct elements efficiently.

### 6. What is conditional rendering?
Conditional rendering means showing different UI depending on a condition. I used it to show the empty-stack message when no technology is selected, and the stack list when items exist.

### 7. How do parent and child components communicate?
A parent can pass data or functions to a child through props. The child can call a function received through props to send an event or value back to the parent.
