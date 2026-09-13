# 🚀 Dev Stack

Dev Stack is a responsive React website that helps developers explore different technologies and build their ideal development stack.

Users can browse technologies, see their category, difficulty and rating, and add their favorite technologies to their personal stack.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- CSS
- JSON
- React Toastify
- Lucide React

## ✨ Features

### 1. Explore Technologies
Users can browse different frontend, backend, database, language, styling and DevOps technologies.

### 2. Build Your Stack
Users can add technologies to their personal stack and remove them whenever they want.

### 3. Responsive Design
The website works on desktop, tablet and mobile devices with a responsive layout.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.

It makes React components easier to read and write.

---

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time.

---

## 3. What does the useState hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

I used it to store the technologies selected by the user in the "Your Stack" section.

I also used it for the mobile navigation menu.

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it to load the technology data from the JSON file and update the loading state after the data was loaded.

---

## 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which item was added, removed or changed.

Example:

```jsx
{technologies.map((tech) => (
  <TechnologyCard
    key={tech.id}
    tech={tech}
  />
))}
